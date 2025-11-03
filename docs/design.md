in<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Octet Systems Design Language</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        :root {
            /* Color System */
            --color-base-white: #FFFFFF;
            --color-base-50: #F8FAFC;
            --color-base-100: #F1F5F9;
            --color-base-200: #E2E8F0;
            --color-base-300: #CBD5E1;
            --color-base-400: #94A3B8;
            --color-base-500: #64748B;
            --color-base-600: #475569;
            --color-base-700: #334155;
            --color-base-800: #1E293B;
            --color-base-900: #0F172A;

            /* Accent Colors */
            --color-primary-50: #EFF6FF;
            --color-primary-100: #DBEAFE;
            --color-primary-200: #BFDBFE;
            --color-primary-300: #93C5FD;
            --color-primary-400: #60A5FA;
            --color-primary-500: #3B82F6;
            --color-primary-600: #2563EB;
            --color-primary-700: #1D4ED8;
            --color-primary-800: #1E40AF;
            --color-primary-900: #1E3A8A;

            --color-accent-50: #ECFDF5;
            --color-accent-500: #10B981;
            --color-accent-600: #059669;

            /* Gradients */
            --gradient-primary: linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%);
            --gradient-accent: linear-gradient(135deg, #10B981 0%, #059669 100%);
            --gradient-subtle: linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%);

            /* Typography */
            --font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            --font-size-xs: 0.75rem;
            --font-size-sm: 0.875rem;
            --font-size-base: 1rem;
            --font-size-lg: 1.125rem;
            --font-size-xl: 1.25rem;
            --font-size-2xl: 1.5rem;
            --font-size-3xl: 1.875rem;
            --font-size-4xl: 2.25rem;
            --font-size-5xl: 3rem;
            --font-size-6xl: 3.75rem;

            --font-weight-light: 300;
            --font-weight-normal: 400;
            --font-weight-medium: 500;
            --font-weight-semibold: 600;
            --font-weight-bold: 700;

            /* Spacing System */
            --space-1: 0.25rem;
            --space-2: 0.5rem;
            --space-3: 0.75rem;
            --space-4: 1rem;
            --space-5: 1.25rem;
            --space-6: 1.5rem;
            --space-8: 2rem;
            --space-10: 2.5rem;
            --space-12: 3rem;
            --space-16: 4rem;
            --space-20: 5rem;
            --space-24: 6rem;

            /* Border Radius */
            --radius-sm: 0.375rem;
            --radius-md: 0.5rem;
            --radius-lg: 0.75rem;
            --radius-xl: 1rem;
            --radius-2xl: 1.5rem;
            --radius-full: 9999px;

            /* Shadows */
            --shadow-xs: 0 1px 2px 0 rgb(0 0 0 / 0.05);
            --shadow-sm: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
            --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
            --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
            --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);

            /* Transitions */
            --transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
            --transition-base: 200ms cubic-bezier(0.4, 0, 0.2, 1);
            --transition-slow: 300ms cubic-bezier(0.4, 0, 0.2, 1);
        }

        body {
            font-family: var(--font-family);
            font-size: var(--font-size-base);
            line-height: 1.6;
            color: var(--color-base-800);
            background: var(--color-base-white);
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }

        .container {
            max-width: 1280px;
            margin: 0 auto;
            padding: 0 var(--space-6);
        }

        /* Header */
        .header {
            position: sticky;
            top: 0;
            z-index: 100;
            background: rgba(255, 255, 255, 0.8);
            backdrop-filter: blur(20px);
            border-bottom: 1px solid var(--color-base-200);
            transition: all var(--transition-base);
        }

        .header-content {
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 64px;
        }

        .logo {
            display: flex;
            align-items: center;
            gap: var(--space-3);
            font-weight: var(--font-weight-semibold);
            font-size: var(--font-size-lg);
            color: var(--color-base-900);
            text-decoration: none;
        }

        .logo-mark {
            width: 32px;
            height: 32px;
            background: var(--gradient-primary);
            border-radius: var(--radius-lg);
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: var(--font-weight-bold);
            font-size: var(--font-size-sm);
        }

        /* Section */
        .section {
            padding: var(--space-20) 0;
        }

        .section-header {
            text-align: center;
            margin-bottom: var(--space-16);
        }

        .section-badge {
            display: inline-flex;
            align-items: center;
            gap: var(--space-2);
            padding: var(--space-2) var(--space-4);
            background: var(--color-primary-50);
            color: var(--color-primary-700);
            border-radius: var(--radius-full);
            font-size: var(--font-size-sm);
            font-weight: var(--font-weight-medium);
            margin-bottom: var(--space-4);
        }

        .section-title {
            font-size: var(--font-size-4xl);
            font-weight: var(--font-weight-bold);
            color: var(--color-base-900);
            margin-bottom: var(--space-4);
            letter-spacing: -0.02em;
        }

        .section-description {
            font-size: var(--font-size-lg);
            color: var(--color-base-600);
            max-width: 48rem;
            margin: 0 auto;
        }

        /* Color Palette */
        .color-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: var(--space-8);
            margin-top: var(--space-8);
        }

        .color-family {
            background: var(--color-base-white);
            border: 1px solid var(--color-base-200);
            border-radius: var(--radius-xl);
            overflow: hidden;
            box-shadow: var(--shadow-sm);
        }

        .color-family-header {
            padding: var(--space-4);
            background: var(--gradient-subtle);
            font-weight: var(--font-weight-semibold);
            font-size: var(--font-size-sm);
            color: var(--color-base-700);
        }

        .color-swatch {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: var(--space-4);
            border-top: 1px solid var(--color-base-100);
            transition: all var(--transition-fast);
        }

        .color-swatch:hover {
            background: var(--color-base-50);
        }

        .color-preview {
            width: 48px;
            height: 48px;
            border-radius: var(--radius-md);
            border: 1px solid var(--color-base-200);
        }

        .color-info {
            flex: 1;
            margin-left: var(--space-4);
        }

        .color-name {
            font-size: var(--font-size-sm);
            font-weight: var(--font-weight-medium);
            color: var(--color-base-900);
        }

        .color-value {
            font-size: var(--font-size-xs);
            color: var(--color-base-500);
            font-family: 'Courier New', monospace;
        }

        /* Typography */
        .type-scale {
            display: flex;
            flex-direction: column;
            gap: var(--space-8);
            margin-top: var(--space-8);
        }

        .type-example {
            padding: var(--space-6);
            background: var(--color-base-white);
            border: 1px solid var(--color-base-200);
            border-radius: var(--radius-xl);
            display: flex;
            gap: var(--space-6);
            align-items: center;
        }

        .type-label {
            min-width: 120px;
            font-size: var(--font-size-sm);
            color: var(--color-base-500);
            font-family: 'Courier New', monospace;
        }

        .type-preview {
            flex: 1;
            color: var(--color-base-900);
        }

        /* Buttons */
        .button-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: var(--space-6);
            margin-top: var(--space-8);
        }

        .button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: var(--space-2);
            padding: var(--space-3) var(--space-6);
            font-size: var(--font-size-base);
            font-weight: var(--font-weight-medium);
            border-radius: var(--radius-lg);
            border: none;
            cursor: pointer;
            transition: all var(--transition-base);
            text-decoration: none;
            font-family: var(--font-family);
        }

        .button-primary {
            background: var(--gradient-primary);
            color: white;
            box-shadow: var(--shadow-sm);
        }

        .button-primary:hover {
            box-shadow: var(--shadow-md);
            transform: translateY(-1px);
        }

        .button-secondary {
            background: var(--color-base-100);
            color: var(--color-base-900);
        }

        .button-secondary:hover {
            background: var(--color-base-200);
        }

        .button-outline {
            background: transparent;
            color: var(--color-base-900);
            border: 2px solid var(--color-base-300);
        }

        .button-outline:hover {
            border-color: var(--color-primary-600);
            color: var(--color-primary-600);
        }

        .button-ghost {
            background: transparent;
            color: var(--color-base-700);
        }

        .button-ghost:hover {
            background: var(--color-base-100);
        }

        .button-large {
            padding: var(--space-4) var(--space-8);
            font-size: var(--font-size-lg);
        }

        .button-small {
            padding: var(--space-2) var(--space-4);
            font-size: var(--font-size-sm);
        }

        /* Cards */
        .card-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            gap: var(--space-6);
            margin-top: var(--space-8);
        }

        .card {
            background: var(--color-base-white);
            border: 1px solid var(--color-base-200);
            border-radius: var(--radius-xl);
            padding: var(--space-6);
            transition: all var(--transition-base);
        }

        .card:hover {
            box-shadow: var(--shadow-lg);
            transform: translateY(-2px);
        }

        .card-icon {
            width: 48px;
            height: 48px;
            background: var(--gradient-primary);
            border-radius: var(--radius-lg);
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: var(--space-4);
        }

        .card-icon svg {
            width: 24px;
            height: 24px;
            stroke: white;
        }

        .card-title {
            font-size: var(--font-size-xl);
            font-weight: var(--font-weight-semibold);
            color: var(--color-base-900);
            margin-bottom: var(--space-2);
        }

        .card-description {
            font-size: var(--font-size-base);
            color: var(--color-base-600);
            line-height: 1.6;
        }

        /* Forms */
        .form-group {
            margin-bottom: var(--space-6);
        }

        .form-label {
            display: block;
            font-size: var(--font-size-sm);
            font-weight: var(--font-weight-medium);
            color: var(--color-base-700);
            margin-bottom: var(--space-2);
        }

        .form-input {
            width: 100%;
            padding: var(--space-3) var(--space-4);
            font-size: var(--font-size-base);
            font-family: var(--font-family);
            color: var(--color-base-900);
            background: var(--color-base-white);
            border: 1px solid var(--color-base-300);
            border-radius: var(--radius-lg);
            transition: all var(--transition-fast);
        }

        .form-input:focus {
            outline: none;
            border-color: var(--color-primary-500);
            box-shadow: 0 0 0 3px var(--color-primary-100);
        }

        /* Icon System */
        .icon-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
            gap: var(--space-4);
            margin-top: var(--space-8);
        }

        .icon-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: var(--space-3);
            padding: var(--space-6);
            background: var(--color-base-white);
            border: 1px solid var(--color-base-200);
            border-radius: var(--radius-lg);
            transition: all var(--transition-fast);
        }

        .icon-item:hover {
            background: var(--color-base-50);
            border-color: var(--color-primary-300);
        }

        .icon-item svg {
            width: 32px;
            height: 32px;
            stroke: var(--color-base-700);
        }

        .icon-name {
            font-size: var(--font-size-xs);
            color: var(--color-base-600);
            text-align: center;
        }

        /* Responsive */
        @media (max-width: 768px) {
            .section-title {
                font-size: var(--font-size-3xl);
            }

            .card-grid {
                grid-template-columns: 1fr;
            }

            .color-grid {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <!-- Header -->
    <header class="header">
        <div class="container">
            <div class="header-content">
                <a href="#" class="logo">
                    <div class="logo-mark">OS</div>
                    <span>Octet Systems</span>
                </a>
            </div>
        </div>
    </header>

    <!-- Hero Section -->
    <section class="section" style="background: linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%);">
        <div class="container">
            <div class="section-header">
                <div class="section-badge">
                    <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                    Design Language
                </div>
                <h1 class="section-title">Octet Systems Design System</h1>
                <p class="section-description">
                    A modern, minimal design language built on precision, innovation, and trust. Every element crafted for clarity and confidence.
                </p>
            </div>
        </div>
    </section>

    <!-- Color Palette -->
    <section class="section">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">Color System</h2>
                <p class="section-description">
                    A carefully curated palette designed for accessibility, hierarchy, and brand expression.
                </p>
            </div>
            <div class="color-grid">
                <div class="color-family">
                    <div class="color-family-header">Base Colors</div>
                    <div class="color-swatch">
                        <div class="color-preview" style="background: #FFFFFF; border: 2px solid #E2E8F0;"></div>
                        <div class="color-info">
                            <div class="color-name">White</div>
                            <div class="color-value">#FFFFFF</div>
                        </div>
                    </div>
                    <div class="color-swatch">
                        <div class="color-preview" style="background: #F1F5F9;"></div>
                        <div class="color-info">
                            <div class="color-name">Base 100</div>
                            <div class="color-value">#F1F5F9</div>
                        </div>
                    </div>
                    <div class="color-swatch">
                        <div class="color-preview" style="background: #64748B;"></div>
                        <div class="color-info">
                            <div class="color-name">Base 500</div>
                            <div class="color-value">#64748B</div>
                        </div>
                    </div>
                    <div class="color-swatch">
                        <div class="color-preview" style="background: #0F172A;"></div>
                        <div class="color-info">
                            <div class="color-name">Base 900</div>
                            <div class="color-value">#0F172A</div>
                        </div>
                    </div>
                </div>

                <div class="color-family">
                    <div class="color-family-header">Primary (Electric Blue)</div>
                    <div class="color-swatch">
                        <div class="color-preview" style="background: #EFF6FF;"></div>
                        <div class="color-info">
                            <div class="color-name">Primary 50</div>
                            <div class="color-value">#EFF6FF</div>
                        </div>
                    </div>
                    <div class="color-swatch">
                        <div class="color-preview" style="background: #60A5FA;"></div>
                        <div class="color-info">
                            <div class="color-name">Primary 400</div>
                            <div class="color-value">#60A5FA</div>
                        </div>
                    </div>
                    <div class="color-swatch">
                        <div class="color-preview" style="background: #3B82F6;"></div>
                        <div class="color-info">
                            <div class="color-name">Primary 500</div>
                            <div class="color-value">#3B82F6</div>
                        </div>
                    </div>
                    <div class="color-swatch">
                        <div class="color-preview" style="background: #1D4ED8;"></div>
                        <div class="color-info">
                            <div class="color-name">Primary 700</div>
                            <div class="color-value">#1D4ED8</div>
                        </div>
                    </div>
                </div>

                <div class="color-family">
                    <div class="color-family-header">Accent (Emerald Green)</div>
                    <div class="color-swatch">
                        <div class="color-preview" style="background: #ECFDF5;"></div>
                        <div class="color-info">
                            <div class="color-name">Accent 50</div>
                            <div class="color-value">#ECFDF5</div>
                        </div>
                    </div>
                    <div class="color-swatch">
                        <div class="color-preview" style="background: #10B981;"></div>
                        <div class="color-info">
                            <div class="color-name">Accent 500</div>
                            <div class="color-value">#10B981</div>
                        </div>
                    </div>
                    <div class="color-swatch">
                        <div class="color-preview" style="background: #059669;"></div>
                        <div class="color-info">
                            <div class="color-name">Accent 600</div>
                            <div class="color-value">#059669</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Typography -->
    <section class="section" style="background: var(--color-base-50);">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">Typography</h2>
                <p class="section-description">
                    Inter font family for exceptional readability and modern aesthetics across all interfaces.
                </p>
            </div>
            <div class="type-scale">
                <div class="type-example">
                    <div class="type-label">Display 6xl</div>
                    <div class="type-preview" style="font-size: var(--font-size-6xl); font-weight: var(--font-weight-bold); letter-spacing: -0.02em;">
                        Innovation Meets Excellence
                    </div>
                </div>
                <div class="type-example">
                    <div class="type-label">Heading 4xl</div>
                    <div class="type-preview" style="font-size: var(--font-size-4xl); font-weight: var(--font-weight-bold); letter-spacing: -0.02em;">
                        Trusted Technology Solutions
                    </div>
                </div>
                <div class="type-example">
                    <div class="type-label">Heading 2xl</div>
                    <div class="type-preview" style="font-size: var(--font-size-2xl); font-weight: var(--font-weight-semibold);">
                        Enterprise-Grade Security
                    </div>
                </div>
                <div class="type-example">
                    <div class="type-label">Body lg</div>
                    <div class="type-preview" style="font-size: var(--font-size-lg); color: var(--color-base-600);">
                        Our comprehensive suite of IT services empowers businesses to thrive in the digital age.
                    </div>
                </div>
                <div class="type-example">
                    <div class="type-label">Body base</div>
                    <div class="type-preview" style="font-size: var(--font-size-base); color: var(--color-base-600);">
                        Clean, readable text that ensures information is easily accessible and digestible.
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Buttons -->
    <section class="section">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">Buttons</h2>
                <p class="section-description">
                    Interactive elements designed for clarity and confidence in every action.
                </p>
            </div>
            <div class="button-grid">
                <div>
                    <button class="button button-primary button-large" style="width: 100%;">
                        Primary Large
                        <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
                <div>
                    <button class="button button-primary" style="width: 100%;">
                        Primary Default
                    </button>
                </div>
                <div>
                    <button class="button button-primary button-small" style="width: 100%;">
                        Primary Small
                    </button>
                </div>
                <div>
                    <button class="button button-secondary" style="width: 100%;">
                        Secondary
                    </button>
                </div>
                <div>
                    <button class="button button-outline" style="width: 100%;">
                        Outline
                    </button>
                </div>
                <div>
                    <button class="button button-ghost" style="width: 100%;">
                        Ghost
                    </button>
                </div>
            </div>
        </div>
    </section>

    <!-- Cards -->
    <section class="section" style="background: var(--color-base-50);">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">Cards & Components</h2>
                <p class="section-description">
                    Modular, reusable components that maintain consistency across experiences.
                </p>
            </div>
            <div class="card-grid">
                <div class="card">
                    <div class="card-icon">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                    </div>
                    <h3 class="card-title">Cybersecurity</h3>
                    <p class="card-description">
                        Advanced protection for your digital assets with enterprise-grade security solutions.
                    </p>
                </div>
                <div class="card">
                    <div class="card-icon" style="background: var(--gradient-accent);">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                    </div>
                    <h3 class="card-title">AI Solutions</h3>
                    <p class="card-description">
                        Harness the power of artificial intelligence to transform your business operations.
                    </p>
                </div>
                <div class="card">
                    <div class="card-icon">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                    </div>
                    <h3 class="card-title">Development</h3>
                    <p class="card-description">
                        Custom software solutions built with precision and scalability in mind.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- Forms -->
    <section class="section">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">Form Elements</h2>
                <p class="section-description">
                    Accessible, intuitive inputs designed for seamless user interaction.
                </p>
            </div>
            <div style="max-width: 600px; margin: 0 auto; background: white; padding: var(--space-8); border-radius: var(--radius-xl); border: 1px solid var(--color-base-200);">
                <div class="form-group">
                    <label class="form-label">Full Name</label>
                    <input type="text" class="form-input" placeholder="Enter your name">
                </div>
                <div class="form-group">
                    <label class="form-label">Email Address</label>
                    <input type="email" class="form-input" placeholder="you@company.com">
                </div>
                <div class="form-group">
                    <label class="form-label">Message</label>
                    <textarea class="form-input" rows="4" placeholder="How can we help you?"></textarea>
                </div>
                <button class="button button-primary" style="width: 100%;">
                    Submit Request
                    <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </button>
            </div>
        </div>
    </section>

    <!-- Icons -->
    <section class="section" style="background: var(--color-base-50);">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">Icon System</h2>
                <p class="section-description">
                    Line-based icons with consistent 2px stroke width for clarity and cohesion.
                </p>
            </div>
            <div class="icon-grid">
                <div class="icon-item">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <span class="icon-name">Security</span>
                </div>
                <div class="icon-item">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span class="icon-name">Shield</span>
                </div>
                <div class="icon-item">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    <span class="icon-name">Code</span>
                </div>
                <div class="icon-item">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                    <span class="icon-name">Lightbulb</span>
                </div>
                <div class="icon-item">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span class="icon-name">Bolt</span>
                </div>
                <div class="icon-item">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span class="icon-name">Briefcase</span>
                </div>
                <div class="icon-item">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                    <span class="icon-name">Adjustments</span>
                </div>
                <div class="icon-item">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                    </svg>
                    <span class="icon-name">Chat</span>
                </div>
            </div>
        </div>
    </section>

    <!-- Spacing System -->
    <section class="section">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">Spacing System</h2>
                <p class="section-description">
                    Consistent spacing scale based on 4px increments for visual harmony.
                </p>
            </div>
            <div style="display: flex; flex-direction: column; gap: var(--space-4); max-width: 800px; margin: 0 auto;">
                <div style="display: flex; align-items: center; gap: var(--space-4);">
                    <div style="min-width: 80px; font-size: var(--font-size-sm); color: var(--color-base-500); font-family: 'Courier New', monospace;">4px</div>
                    <div style="height: 40px; background: var(--gradient-primary); border-radius: var(--radius-md); width: 4px;"></div>
                    <div style="font-size: var(--font-size-sm); color: var(--color-base-600);">Space 1 - Tight spacing</div>
                </div>
                <div style="display: flex; align-items: center; gap: var(--space-4);">
                    <div style="min-width: 80px; font-size: var(--font-size-sm); color: var(--color-base-500); font-family: 'Courier New', monospace;">16px</div>
                    <div style="height: 40px; background: var(--gradient-primary); border-radius: var(--radius-md); width: 16px;"></div>
                    <div style="font-size: var(--font-size-sm); color: var(--color-base-600);">Space 4 - Base spacing</div>
                </div>
                <div style="display: flex; align-items: center; gap: var(--space-4);">
                    <div style="min-width: 80px; font-size: var(--font-size-sm); color: var(--color-base-500); font-family: 'Courier New', monospace;">32px</div>
                    <div style="height: 40px; background: var(--gradient-primary); border-radius: var(--radius-md); width: 32px;"></div>
                    <div style="font-size: var(--font-size-sm); color: var(--color-base-600);">Space 8 - Section spacing</div>
                </div>
                <div style="display: flex; align-items: center; gap: var(--space-4);">
                    <div style="min-width: 80px; font-size: var(--font-size-sm); color: var(--color-base-500); font-family: 'Courier New', monospace;">64px</div>
                    <div style="height: 40px; background: var(--gradient-primary); border-radius: var(--radius-md); width: 64px;"></div>
                    <div style="font-size: var(--font-size-sm); color: var(--color-base-600);">Space 16 - Component spacing</div>
                </div>
                <div style="display: flex; align-items: center; gap: var(--space-4);">
                    <div style="min-width: 80px; font-size: var(--font-size-sm); color: var(--color-base-500); font-family: 'Courier New', monospace;">80px</div>
                    <div style="height: 40px; background: var(--gradient-primary); border-radius: var(--radius-md); width: 80px;"></div>
                    <div style="font-size: var(--font-size-sm); color: var(--color-base-600);">Space 20 - Layout spacing</div>
                </div>
            </div>
        </div>
    </section>

    <!-- Principles -->
    <section class="section" style="background: var(--gradient-subtle);">
        <div class="container">
            <div class="section-header">
                <div class="section-badge">Design Principles</div>
                <h2 class="section-title">Built on Precision & Trust</h2>
            </div>
            <div class="card-grid">
                <div class="card">
                    <div style="font-size: var(--font-size-4xl); margin-bottom: var(--space-4);">🎯</div>
                    <h3 class="card-title">Clarity First</h3>
                    <p class="card-description">
                        Every element serves a purpose. No decoration without function. Information is accessible and scannable.
                    </p>
                </div>
                <div class="card">
                    <div style="font-size: var(--font-size-4xl); margin-bottom: var(--space-4);">⚡</div>
                    <h3 class="card-title">Minimal Motion</h3>
                    <p class="card-description">
                        Animations guide attention and provide feedback. Transitions are smooth but never distracting.
                    </p>
                </div>
                <div class="card">
                    <div style="font-size: var(--font-size-4xl); margin-bottom: var(--space-4);">♿</div>
                    <h3 class="card-title">Accessibility</h3>
                    <p class="card-description">
                        WCAG 2.1 AA compliant. High contrast ratios, keyboard navigation, and semantic HTML throughout.
                    </p>
                </div>
                <div class="card">
                    <div style="font-size: var(--font-size-4xl); margin-bottom: var(--space-4);">📱</div>
                    <h3 class="card-title">Responsive</h3>
                    <p class="card-description">
                        Fluid layouts that adapt seamlessly from mobile to desktop. Touch-friendly targets on all devices.
                    </p>
                </div>
                <div class="card">
                    <div style="font-size: var(--font-size-4xl); margin-bottom: var(--space-4);">🔒</div>
                    <h3 class="card-title">Trust Signals</h3>
                    <p class="card-description">
                        Professional polish in every detail. Consistent patterns that build user confidence and reliability.
                    </p>
                </div>
                <div class="card">
                    <div style="font-size: var(--font-size-4xl); margin-bottom: var(--space-4);">🚀</div>
                    <h3 class="card-title">Performance</h3>
                    <p class="card-description">
                        Optimized assets, efficient code, and fast load times. Users never wait for the interface to respond.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer style="border-top: 1px solid var(--color-base-200); background: var(--color-base-white); padding: var(--space-16) 0;">
        <div class="container">
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: var(--space-12); margin-bottom: var(--space-12);">
                <div>
                    <a href="#" class="logo" style="margin-bottom: var(--space-4); display: inline-flex;">
                        <div class="logo-mark">OS</div>
                        <span>Octet Systems</span>
                    </a>
                    <p style="color: var(--color-base-600); font-size: var(--font-size-sm); margin-top: var(--space-4); max-width: 280px;">
                        Empowering businesses through innovative technology solutions and enterprise-grade cybersecurity.
                    </p>
                </div>
                <div>
                    <h3 style="font-weight: var(--font-weight-semibold); font-size: var(--font-size-sm); color: var(--color-base-900); margin-bottom: var(--space-4);">Services</h3>
                    <ul style="list-style: none; display: flex; flex-direction: column; gap: var(--space-3);">
                        <li><a href="#" style="color: var(--color-base-600); text-decoration: none; font-size: var(--font-size-sm); transition: color var(--transition-fast);" onmouseover="this.style.color='var(--color-primary-600)'" onmouseout="this.style.color='var(--color-base-600)'">Cybersecurity</a></li>
                        <li><a href="#" style="color: var(--color-base-600); text-decoration: none; font-size: var(--font-size-sm); transition: color var(--transition-fast);" onmouseover="this.style.color='var(--color-primary-600)'" onmouseout="this.style.color='var(--color-base-600)'">System Support</a></li>
                        <li><a href="#" style="color: var(--color-base-600); text-decoration: none; font-size: var(--font-size-sm); transition: color var(--transition-fast);" onmouseover="this.style.color='var(--color-primary-600)'" onmouseout="this.style.color='var(--color-base-600)'">AI Solutions</a></li>
                        <li><a href="#" style="color: var(--color-base-600); text-decoration: none; font-size: var(--font-size-sm); transition: color var(--transition-fast);" onmouseover="this.style.color='var(--color-primary-600)'" onmouseout="this.style.color='var(--color-base-600)'">IT Training</a></li>
                    </ul>
                </div>
                <div>
                    <h3 style="font-weight: var(--font-weight-semibold); font-size: var(--font-size-sm); color: var(--color-base-900); margin-bottom: var(--space-4);">Company</h3>
                    <ul style="list-style: none; display: flex; flex-direction: column; gap: var(--space-3);">
                        <li><a href="#" style="color: var(--color-base-600); text-decoration: none; font-size: var(--font-size-sm); transition: color var(--transition-fast);" onmouseover="this.style.color='var(--color-primary-600)'" onmouseout="this.style.color='var(--color-base-600)'">About</a></li>
                        <li><a href="#" style="color: var(--color-base-600); text-decoration: none; font-size: var(--font-size-sm); transition: color var(--transition-fast);" onmouseover="this.style.color='var(--color-primary-600)'" onmouseout="this.style.color='var(--color-base-600)'">Portfolio</a></li>
                        <li><a href="#" style="color: var(--color-base-600); text-decoration: none; font-size: var(--font-size-sm); transition: color var(--transition-fast);" onmouseover="this.style.color='var(--color-primary-600)'" onmouseout="this.style.color='var(--color-base-600)'">Contact</a></li>
                    </ul>
                </div>
                <div>
                    <h3 style="font-weight: var(--font-weight-semibold); font-size: var(--font-size-sm); color: var(--color-base-900); margin-bottom: var(--space-4);">Legal</h3>
                    <ul style="list-style: none; display: flex; flex-direction: column; gap: var(--space-3);">
                        <li><a href="#" style="color: var(--color-base-600); text-decoration: none; font-size: var(--font-size-sm); transition: color var(--transition-fast);" onmouseover="this.style.color='var(--color-primary-600)'" onmouseout="this.style.color='var(--color-base-600)'">Privacy Policy</a></li>
                        <li><a href="#" style="color: var(--color-base-600); text-decoration: none; font-size: var(--font-size-sm); transition: color var(--transition-fast);" onmouseover="this.style.color='var(--color-primary-600)'" onmouseout="this.style.color='var(--color-base-600)'">Terms of Service</a></li>
                    </ul>
                </div>
            </div>
            <div style="padding-top: var(--space-8); border-top: 1px solid var(--color-base-200); text-align: center;">
                <p style="color: var(--color-base-500); font-size: var(--font-size-sm);">
                    © 2025 Octet Systems. All rights reserved.
                </p>
            </div>
        </div>
    </footer>
</body>
</html>