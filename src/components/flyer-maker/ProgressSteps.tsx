
'use client';
import { useFlyerState, useFlyerDispatch } from '@/lib/hooks/useFlyerState';
import { UploadCloud, Quote, Palette, Download } from 'lucide-react';
import { cn } from '@/lib/utils';

const steps = [
  { step: 1, label: 'Upload Photo', icon: UploadCloud },
  { step: 2, label: 'Choose Quote', icon: Quote },
  { step: 3, label: 'Select Theme', icon: Palette },
  { step: 4, label: 'Download', icon: Download },
];

export function ProgressSteps() {
  const { step: currentStep, image } = useFlyerState();
  const dispatch = useFlyerDispatch();

  const isStepClickable = (step: number) => {
    if (step < currentStep) return true;
    if (step === 2 && image.preview) return true;
    if (step === 3 && image.preview) return true;
    if (step === 4 && image.preview) return true;
    return false;
  }

  return (
    <div className="w-full">
      <div className="flex justify-between items-center">
        {steps.map(({ step, label, icon: Icon }, index) => {
          const isActive = currentStep === step;
          const isCompleted = currentStep > step;
          const isClickable = isStepClickable(step);

          return (
            <div key={step} className="flex-1 flex items-center gap-4 group">
              <button
                disabled={!isClickable}
                onClick={() => dispatch({ type: 'SET_STEP', payload: step })}
                className={cn(
                  "flex items-center gap-3 p-2 rounded-xl transition-all duration-200",
                  isClickable ? "cursor-pointer hover:bg-slate-50" : "cursor-not-allowed"
                )}
              >
                <div
                  className={cn(
                    'w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300',
                    isActive ? 'bg-slate-900 text-white scale-110 shadow-lg' :
                    isCompleted ? 'bg-emerald-500 text-white' : 'bg-slate-200 text-slate-500'
                  )}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <span
                  className={cn(
                    'text-sm font-medium hidden md:inline',
                    isActive ? 'text-slate-900' : 'text-slate-600'
                  )}
                >
                  {label}
                </span>
              </button>

              {index < steps.length - 1 && (
                <div className={cn(
                  'flex-1 h-1 rounded-full transition-colors duration-500',
                  isCompleted ? 'bg-green-500' : 'bg-slate-200'
                )} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
