'use client';

import React, { useState, useEffect } from 'react';
import { Button } from './button';
import { Card } from './card';
import { Play, RotateCcw, CheckCircle, XCircle, Lightbulb } from 'lucide-react';

interface CodeEditorProps {
  initialCode?: string;
  expectedOutput?: string;
  hint?: string;
  onRun?: (code: string, output: string) => void;
  language?: 'python' | 'javascript';
  readOnly?: boolean;
  height?: string;
}

export function CodeEditor({ 
  initialCode = '', 
  expectedOutput, 
  hint, 
  onRun, 
  language = 'python',
  readOnly = false,
  height = '200px'
}: CodeEditorProps) {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  // Simple Python-like interpreter for basic operations
  const runPythonCode = (pythonCode: string) => {
    try {
      // Remove comments and clean code
      const cleanCode = pythonCode.split('\n')
        .filter(line => !line.trim().startsWith('#'))
        .join('\n');

      // Handle basic print statements
      const printStatements = cleanCode.match(/print\((.*)\)/g);
      if (printStatements) {
        const results = printStatements.map(stmt => {
          const content = stmt.match(/print\((.*)\)/)?.[1];
          if (!content) return '';
          
          // Handle string literals
          if (content.startsWith('"') && content.endsWith('"')) {
            return content.slice(1, -1);
          }
          if (content.startsWith("'") && content.endsWith("'")) {
            return content.slice(1, -1);
          }
          
          // Handle basic math expressions
          try {
            // Simple math evaluation (safe for basic operations)
            const result = Function('"use strict"; return (' + content + ')')();
            return String(result);
          } catch {
            return content;
          }
        });
        return results.join('\n');
      }

      // Handle variable assignments and basic operations
      const lines = cleanCode.split('\n');
      let result = '';
      const variables: { [key: string]: any } = {};

      for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed) continue;

        // Variable assignment
        if (trimmed.includes('=')) {
          const [varName, varValue] = trimmed.split('=').map(s => s.trim());
          try {
            variables[varName] = Function('"use strict"; return (' + varValue + ')')();
          } catch {
            variables[varName] = varValue.replace(/['"]/g, '');
          }
        }
        // Expression evaluation
        else if (trimmed && !trimmed.startsWith('print')) {
          try {
            // Replace variables in expression
            let expr = trimmed;
            for (const [varName, varValue] of Object.entries(variables)) {
              expr = expr.replace(new RegExp(`\\b${varName}\\b`, 'g'), String(varValue));
            }
            result = String(Function('"use strict"; return (' + expr + ')')());
          } catch {
            result = trimmed;
          }
        }
      }

      return result;
    } catch (error) {
      return `Error: ${error}`;
    }
  };

  const handleRun = async () => {
    setIsRunning(true);
    setIsCorrect(null);
    
    try {
      let result = '';
      if (language === 'python') {
        result = runPythonCode(code);
      } else {
        // Simple JavaScript evaluation
        result = String(Function('"use strict"; ' + code)());
      }
      
      setOutput(result);
      
      // Check if output matches expected
      if (expectedOutput !== undefined) {
        const correct = result.trim() === expectedOutput.trim();
        setIsCorrect(correct);
      }
      
      onRun?.(code, result);
    } catch (error) {
      setOutput(`Error: ${error}`);
      setIsCorrect(false);
    } finally {
      setIsRunning(false);
    }
  };

  const handleReset = () => {
    setCode(initialCode);
    setOutput('');
    setIsCorrect(null);
    setShowHint(false);
  };

  const getSyntaxHighlighting = (text: string) => {
    // Simple syntax highlighting for Python
    return text
      // Keywords
      .replace(/\b(def|if|else|elif|for|while|return|import|from|as|class|try|except|finally|with|in|is|and|or|not|True|False|None)\b/g, 
        '<span class="text-purple-600 font-semibold">$1</span>')
      // Strings
      .replace(/(["'])(?:(?=(\\?))\2.)*?\1/g, 
        '<span class="text-green-600">$&</span>')
      // Comments
      .replace(/(#.*$)/gm, 
        '<span class="text-gray-500 italic">$1</span>')
      // Numbers
      .replace(/\b(\d+)\b/g, 
        '<span class="text-blue-600">$1</span>');
  };

  return (
    <div className="space-y-4">
      <Card className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="text-sm text-muted-foreground ml-2">
              {language === 'python' ? 'Python' : 'JavaScript'} Interactive
            </span>
          </div>
          <div className="flex gap-2">
            {hint && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowHint(!showHint)}
                className="gap-2"
              >
                <Lightbulb className="w-4 h-4" />
                Hint
              </Button>
            )}
            <Button
              variant="outline"
              size="sm"
              onClick={handleReset}
              className="gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              Reset
            </Button>
            <Button
              onClick={handleRun}
              disabled={isRunning || readOnly}
              size="sm"
              className="gap-2"
            >
              <Play className="w-4 h-4" />
              {isRunning ? 'Running...' : 'Run'}
            </Button>
          </div>
        </div>

        {/* Code Editor */}
        <div className="relative">
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            readOnly={readOnly}
            className="w-full font-mono text-sm p-4 bg-slate-900 text-slate-100 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary"
            style={{ height, minHeight: '100px' }}
            spellCheck={false}
          />
          {/* Syntax highlighting overlay (read-only) */}
          {readOnly && (
            <div 
              className="absolute inset-0 font-mono text-sm p-4 bg-slate-900 text-slate-100 rounded-lg pointer-events-none overflow-hidden"
              style={{ height }}
              dangerouslySetInnerHTML={{ 
                __html: getSyntaxHighlighting(code).replace(/\n/g, '<br>') 
              }}
            />
          )}
        </div>

        {/* Hint */}
        {showHint && hint && (
          <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>Hint:</strong> {hint}
            </p>
          </div>
        )}

        {/* Output */}
        {output && (
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <h4 className="text-sm font-semibold">Output:</h4>
              {isCorrect !== null && (
                <div className={`flex items-center gap-1 text-sm ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                  {isCorrect ? (
                    <>
                      <CheckCircle className="w-4 h-4" />
                      <span>Correct!</span>
                    </>
                  ) : (
                    <>
                      <XCircle className="w-4 h-4" />
                      <span>Try again</span>
                    </>
                  )}
                </div>
              )}
            </div>
            <div className="p-3 bg-slate-100 rounded-lg font-mono text-sm">
              <pre className="whitespace-pre-wrap">{output}</pre>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
}