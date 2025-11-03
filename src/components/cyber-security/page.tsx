<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Octet Systems - Setting New Trends in Technology</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        /* ===== MODERN CSS VARIABLES ===== */
        :root {
            --primary: #0A2463;
            --accent: #3E92CC;
            --accent-light: #5AA9E6;
            --neutral-dark: #1D1D1F;
            --neutral-medium: #86868B;
            --neutral-light: #F5F5F7;
            --white: #FFFFFF;
            --alert: #FF3B30;
            --success: #34C759;
            --warning: #FF9500;
            
            --border-radius: 12px;
            --border-radius-lg: 20px;
            --border-radius-xl: 30px;
            --card-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
            --card-shadow-hover: 0 8px 32px rgba(0, 0, 0, 0.12);
            --transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            --transition-fast: all 0.2s ease;
        }

        /* ===== GLOBAL STYLES ===== */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        html {
            scroll-behavior: smooth;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Inter', 'Segoe UI', sans-serif;
            line-height: 1.6;
            color: var(--neutral-dark);
            background-color: var(--white);
            font-weight: 400;
            -webkit-font-smoothing: antialiased;
        }

        .container {
            width: 100%;
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 24px;
        }

        h1, h2, h3, h4, h5 {
            font-weight: 600;
            line-height: 1.2;
            margin-bottom: 1rem;
            color: var(--neutral-dark);
        }

        h1 {
            font-size: 3.5rem;
            font-weight: 700;
            letter-spacing: -0.5px;
        }

        h2 {
            font-size: 2.5rem;
            letter-spacing: -0.3px;
        }

        h3 {
            font-size: 1.8rem;
        }

        h4 {
            font-size: 1.4rem;
        }

        p {
            margin-bottom: 1.5rem;
            color: var(--neutral-medium);
            font-size: 1.1rem;
            line-height: 1.6;
        }

        .section-header {
            text-align: center;
            margin-bottom: 4rem;
        }

        .section-header p {
            max-width: 700px;
            margin: 0 auto;
            font-size: 1.2rem;
        }

        .btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            padding: 14px 28px;
            border: none;
            border-radius: var(--border-radius);
            font-weight: 600;
            text-decoration: none;
            cursor: pointer;
            transition: var(--transition);
            font-size: 1rem;
            position: relative;
            overflow: hidden;
        }

        .btn::after {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 5px;
            height: 5px;
            background: rgba(255, 255, 255, 0.5);
            opacity: 0;
            border-radius: 100%;
            transform: scale(1, 1) translate(-50%);
            transform-origin: 50% 50%;
        }

        .btn:focus:not(:active)::after {
            animation: ripple 1s ease-out;
        }

        @keyframes ripple {
            0% {
                transform: scale(0, 0);
                opacity: 0.5;
            }
            100% {
                transform: scale(20, 20);
                opacity: 0;
            }
        }

        .btn-primary {
            background: linear-gradient(135deg, var(--accent), var(--primary));
            color: var(--white);
            box-shadow: 0 4px 14px 0 rgba(10, 36, 99, 0.2);
        }

        .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(10, 36, 99, 0.25);
        }

        .btn-secondary {
            background: rgba(255, 255, 255, 0.1);
            color: var(--white);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .btn-secondary:hover {
            background: rgba(255, 255, 255, 0.2);
        }

        .btn-large {
            padding: 16px 32px;
            font-size: 1.1rem;
        }

        section {
            padding: 6rem 0;
        }

        /* ===== HEADER & NAVIGATION ===== */
        header {
            background-color: rgba(255, 255, 255, 0.8);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            position: fixed;
            top: 0;
            width: 100%;
            z-index: 1000;
            border-bottom: 1px solid rgba(0, 0, 0, 0.05);
            transition: var(--transition);
        }

        header.scrolled {
            background-color: rgba(255, 255, 255, 0.95);
            box-shadow: 0 2px 30px rgba(0, 0, 0, 0.08);
        }

        .navbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1.2rem 0;
        }

        .logo {
            font-size: 1.6rem;
            font-weight: 700;
            color: var(--primary);
            text-decoration: none;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .logo-icon {
            width: 32px;
            height: 32px;
            background: linear-gradient(135deg, var(--accent), var(--primary));
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: bold;
            font-size: 0.9rem;
        }

        .nav-links {
            display: flex;
            list-style: none;
            gap: 2.5rem;
        }

        .nav-links a {
            text-decoration: none;
            color: var(--neutral-dark);
            font-weight: 500;
            transition: var(--transition-fast);
            position: relative;
            padding: 8px 0;
        }

        .nav-links a::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0;
            height: 2px;
            background: var(--accent);
            transition: var(--transition);
        }

        .nav-links a:hover::after,
        .nav-links a.active::after {
            width: 100%;
        }

        .nav-links a:hover,
        .nav-links a.active {
            color: var(--accent);
        }

        .mobile-menu-btn {
            display: none;
            background: none;
            border: none;
            font-size: 1.5rem;
            cursor: pointer;
            color: var(--neutral-dark);
        }

        /* ===== HERO SECTION ===== */
        .hero {
            background: linear-gradient(135deg, var(--primary), #1a3a8a);
            color: var(--white);
            padding: 12rem 0 8rem;
            text-align: center;
            position: relative;
            overflow: hidden;
        }

        .hero::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" opacity="0.05"><polygon fill="white" points="0,1000 1000,0 1000,1000"/></svg>');
            background-size: cover;
        }

        .hero h1 {
            color: var(--white);
            font-size: 4rem;
            margin-bottom: 1.5rem;
            font-weight: 700;
        }

        .hero p {
            color: rgba(255, 255, 255, 0.9);
            font-size: 1.4rem;
            max-width: 700px;
            margin: 0 auto 3rem;
        }

        .hero-buttons {
            display: flex;
            gap: 1rem;
            justify-content: center;
            flex-wrap: wrap;
        }

        /* ===== SECURITY SECTIONS ===== */
        .security-section {
            background: var(--white);
            border-radius: var(--border-radius-lg);
            padding: 3rem;
            margin: 3rem 0;
            box-shadow: var(--card-shadow);
            transition: var(--transition);
            border: 1px solid rgba(0, 0, 0, 0.03);
        }

        .security-section:hover {
            box-shadow: var(--card-shadow-hover);
            transform: translateY(-5px);
        }

        .privacy-notice {
            display: flex;
            align-items: center;
            background: linear-gradient(135deg, rgba(52, 199, 89, 0.1), rgba(52, 199, 89, 0.05));
            padding: 1.5rem;
            border-radius: var(--border-radius);
            margin-bottom: 2rem;
            border-left: 4px solid var(--success);
        }

        .privacy-notice i {
            margin-right: 12px;
            color: var(--success);
            font-size: 1.8rem;
        }

        .privacy-notice p {
            margin: 0;
            font-weight: 500;
            color: var(--neutral-dark);
        }

        .form-group {
            margin-bottom: 2rem;
        }

        .form-group label {
            display: block;
            margin-bottom: 0.8rem;
            font-weight: 600;
            color: var(--neutral-dark);
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
            width: 100%;
            padding: 16px;
            border: 1px solid #E5E5E7;
            border-radius: var(--border-radius);
            font-family: inherit;
            font-size: 1rem;
            transition: var(--transition-fast);
            background: var(--white);
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
            outline: none;
            border-color: var(--accent);
            box-shadow: 0 0 0 4px rgba(62, 146, 204, 0.1);
        }

        .form-group textarea {
            min-height: 150px;
            resize: vertical;
        }

        .secure-upload {
            border: 2px dashed var(--accent);
            padding: 2.5rem;
            text-align: center;
            background-color: rgba(62, 146, 204, 0.03);
            border-radius: var(--border-radius);
            transition: var(--transition);
            cursor: pointer;
        }

        .secure-upload:hover {
            background-color: rgba(62, 146, 204, 0.08);
        }

        .secure-upload p {
            margin: 0;
            color: var(--accent);
            font-weight: 500;
        }

        .security-features {
            margin-top: 2.5rem;
            padding: 2rem;
            background: var(--neutral-light);
            border-radius: var(--border-radius);
        }

        .security-features h3 {
            margin-bottom: 1.5rem;
        }

        .security-features ul {
            list-style: none;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 1rem;
        }

        .security-features li {
            padding: 0.8rem 0;
            display: flex;
            align-items: center;
            gap: 10px;
            color: var(--neutral-dark);
        }

        /* ===== PHISHING SCANNER ===== */
        .scanner-interface {
            margin: 2.5rem 0;
        }

        .input-group {
            display: flex;
            margin-bottom: 2rem;
            border-radius: var(--border-radius);
            overflow: hidden;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        }

        .input-group input {
            flex: 1;
            padding: 18px 20px;
            border: none;
            font-size: 1.1rem;
            background: var(--white);
        }

        .input-group input:focus {
            box-shadow: none;
        }

        .input-group button {
            border-radius: 0;
            padding: 0 30px;
            font-weight: 600;
        }

        .results-container {
            padding: 2rem;
            background-color: var(--white);
            border-radius: var(--border-radius);
            min-height: 120px;
            display: none;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
            border: 1px solid rgba(0, 0, 0, 0.03);
        }

        .threat-indicators {
            margin-top: 3rem;
        }

        .indicator-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
            gap: 1.5rem;
            margin-top: 1.5rem;
        }

        .indicator {
            display: flex;
            align-items: center;
            padding: 1.5rem;
            background-color: var(--white);
            border-radius: var(--border-radius);
            box-shadow: var(--card-shadow);
            transition: var(--transition);
        }

        .indicator:hover {
            transform: translateY(-5px);
            box-shadow: var(--card-shadow-hover);
        }

        .indicator i {
            margin-right: 15px;
            color: var(--accent);
            font-size: 2rem;
            width: 50px;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(62, 146, 204, 0.1);
            border-radius: 12px;
        }

        /* ===== PASSWORD CHECKER ===== */
        .password-input-wrapper {
            position: relative;
            margin-bottom: 2rem;
        }

        .password-input-wrapper input {
            width: 100%;
            padding: 18px 50px 18px 18px;
            border: 1px solid #E5E5E7;
            border-radius: var(--border-radius);
            font-size: 1.1rem;
            transition: var(--transition-fast);
        }

        .password-input-wrapper input:focus {
            border-color: var(--accent);
            box-shadow: 0 0 0 4px rgba(62, 146, 204, 0.1);
        }

        .btn-icon {
            position: absolute;
            right: 15px;
            top: 50%;
            transform: translateY(-50%);
            background: none;
            border: none;
            cursor: pointer;
            color: var(--neutral-medium);
            font-size: 1.2rem;
            transition: var(--transition-fast);
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
        }

        .btn-icon:hover {
            background: rgba(0, 0, 0, 0.05);
            color: var(--neutral-dark);
        }

        .strength-meter {
            margin-bottom: 2rem;
        }

        .strength-bar {
            height: 12px;
            background-color: var(--neutral-light);
            border-radius: 6px;
            margin-bottom: 10px;
            overflow: hidden;
            position: relative;
        }

        .strength-fill {
            height: 100%;
            width: 0%;
            border-radius: 6px;
            transition: width 0.5s ease, background-color 0.5s ease;
        }

        .strength-labels {
            display: flex;
            justify-content: space-between;
            font-size: 0.9rem;
            color: var(--neutral-medium);
        }

        .feedback-panel {
            padding: 2rem;
            background-color: var(--neutral-light);
            border-radius: var(--border-radius);
            margin-bottom: 2rem;
        }

        .feedback-panel h4 {
            margin-bottom: 1.2rem;
        }

        .feedback-panel ul {
            list-style: none;
        }

        .feedback-panel li {
            padding: 0.5rem 0;
            display: flex;
            align-items: center;
            gap: 10px;
            transition: var(--transition-fast);
        }

        .feedback-panel li.valid {
            color: var(--success);
        }

        .feedback-panel li.invalid {
            color: var(--neutral-medium);
        }

        .security-metrics {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 1.5rem;
        }

        .metric {
            text-align: center;
            padding: 1.5rem;
            background-color: var(--white);
            border-radius: var(--border-radius);
            box-shadow: var(--card-shadow);
            transition: var(--transition);
        }

        .metric:hover {
            transform: translateY(-5px);
            box-shadow: var(--card-shadow-hover);
        }

        .metric-value {
            display: block;
            font-size: 2.5rem;
            font-weight: 700;
            color: var(--accent);
            margin-bottom: 0.5rem;
        }

        .metric-label {
            font-size: 0.95rem;
            color: var(--neutral-medium);
            font-weight: 500;
        }

        /* ===== PASSWORD GAME ===== */
        .security-game {
            background: linear-gradient(135deg, #f8f9fa, #e9ecef);
            border-radius: var(--border-radius-lg);
            padding: 3rem;
            box-shadow: var(--card-shadow);
        }

        .game-stats {
            display: flex;
            gap: 1.5rem;
            margin-bottom: 2rem;
        }

        .stat {
            flex: 1;
            text-align: center;
            padding: 1.5rem;
            background-color: var(--white);
            border-radius: var(--border-radius);
            box-shadow: var(--card-shadow);
        }

        .stat-value {
            display: block;
            font-size: 2.8rem;
            font-weight: 700;
            color: var(--accent);
            margin-bottom: 0.5rem;
        }

        .stat-label {
            font-size: 1rem;
            color: var(--neutral-medium);
            font-weight: 500;
        }

        .game-area {
            margin-bottom: 2rem;
        }

        .scenario-card {
            padding: 2.5rem;
            background-color: var(--white);
            border-radius: var(--border-radius);
            box-shadow: var(--card-shadow);
            margin-bottom: 2rem;
            transition: var(--transition);
        }

        .scenario-card:hover {
            box-shadow: var(--card-shadow-hover);
        }

        .scenario-card ul {
            margin: 1.5rem 0;
            padding-left: 1.5rem;
        }

        .scenario-card li {
            margin-bottom: 0.8rem;
            color: var(--neutral-medium);
            transition: var(--transition-fast);
        }

        .scenario-card li.requirement-met {
            color: var(--success);
            text-decoration: line-through;
        }

        #game-password-input {
            width: 100%;
            padding: 18px;
            border: 1px solid #E5E5E7;
            border-radius: var(--border-radius);
            font-size: 1.1rem;
            margin: 1.5rem 0;
            transition: var(--transition-fast);
        }

        #game-password-input:focus {
            border-color: var(--accent);
            box-shadow: 0 0 0 4px rgba(62, 146, 204, 0.1);
        }

        .game-feedback {
            min-height: 80px;
            padding: 1.5rem;
            background: linear-gradient(135deg, rgba(52, 199, 89, 0.1), rgba(52, 199, 89, 0.05));
            border-radius: var(--border-radius);
            margin: 1.5rem 0;
            display: none;
            align-items: center;
            justify-content: center;
            text-align: center;
            font-weight: 600;
            color: var(--success);
        }

        .btn-game {
            background: linear-gradient(135deg, var(--accent), var(--accent-light));
            color: var(--white);
            width: 100%;
            padding: 18px;
            font-size: 1.1rem;
            font-weight: 600;
        }

        .game-progress {
            margin-top: 2rem;
        }

        .progress-bar {
            height: 10px;
            background-color: var(--neutral-light);
            border-radius: 5px;
            margin-bottom: 10px;
            overflow: hidden;
        }

        .progress-fill {
            height: 100%;
            width: 0%;
            background: linear-gradient(135deg, var(--accent), var(--accent-light));
            border-radius: 5px;
            transition: width 0.5s ease;
        }

        .game-tips {
            padding: 2rem;
            background-color: var(--white);
            border-radius: var(--border-radius);
            box-shadow: var(--card-shadow);
        }

        .tip-carousel {
            position: relative;
            height: 80px;
            overflow: hidden;
        }

        .tip {
            position: absolute;
            width: 100%;
            opacity: 0;
            transition: opacity 0.5s ease;
            font-style: italic;
            text-align: center;
            padding: 1rem;
            font-size: 1.1rem;
            color: var(--neutral-medium);
        }

        .tip.active {
            opacity: 1;
        }

        /* ===== FOOTER ===== */
        footer {
            background-color: var(--neutral-dark);
            color: var(--white);
            padding: 5rem 0 3rem;
        }

        .footer-content {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .footer-logo {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 2rem;
            font-size: 1.8rem;
            font-weight: 700;
            color: var(--white);
        }

        .footer-links {
            display: flex;
            gap: 2.5rem;
            margin: 2rem 0;
            flex-wrap: wrap;
            justify-content: center;
        }

        .footer-links a {
            color: rgba(255, 255, 255, 0.8);
            text-decoration: none;
            transition: var(--transition-fast);
            font-weight: 500;
        }

        .footer-links a:hover {
            color: var(--white);
        }

        .copyright {
            margin-top: 3rem;
            font-size: 0.95rem;
            color: rgba(255, 255, 255, 0.6);
            text-align: center;
        }

        /* ===== RESPONSIVE DESIGN ===== */
        @media (max-width: 1024px) {
            h1 {
                font-size: 3rem;
            }
            
            h2 {
                font-size: 2.2rem;
            }
            
            .hero h1 {
                font-size: 3.2rem;
            }
        }

        @media (max-width: 768px) {
            .navbar {
                padding: 1rem 0;
            }
            
            .nav-links {
                display: none;
                position: absolute;
                top: 100%;
                left: 0;
                width: 100%;
                background: rgba(255, 255, 255, 0.98);
                backdrop-filter: blur(20px);
                flex-direction: column;
                padding: 2rem;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
                border-top: 1px solid rgba(0, 0, 0, 0.05);
                gap: 1.5rem;
            }
            
            .nav-links.active {
                display: flex;
            }
            
            .mobile-menu-btn {
                display: block;
            }
            
            .hero {
                padding: 10rem 0 6rem;
            }
            
            .hero h1 {
                font-size: 2.5rem;
            }
            
            .hero p {
                font-size: 1.2rem;
            }
            
            .hero-buttons {
                flex-direction: column;
                align-items: center;
            }
            
            .hero-buttons .btn {
                width: 100%;
                max-width: 300px;
            }
            
            .security-section {
                padding: 2rem;
            }
            
            .input-group {
                flex-direction: column;
            }
            
            .input-group input {
                border-radius: var(--border-radius) var(--border-radius) 0 0;
            }
            
            .input-group button {
                border-radius: 0 0 var(--border-radius) var(--border-radius);
                padding: 16px;
            }
            
            .security-metrics {
                grid-template-columns: 1fr;
            }
            
            .game-stats {
                flex-direction: column;
            }
            
            .indicator-grid {
                grid-template-columns: 1fr;
            }
            
            .security-features ul {
                grid-template-columns: 1fr;
            }
        }

        @media (max-width: 480px) {
            .container {
                padding: 0 16px;
            }
            
            h1 {
                font-size: 2.2rem;
            }
            
            h2 {
                font-size: 1.8rem;
            }
            
            .hero h1 {
                font-size: 2rem;
            }
            
            .hero p {
                font-size: 1.1rem;
            }
            
            section {
                padding: 4rem 0;
            }
            
            .security-section {
                padding: 1.5rem;
            }
            
            .scenario-card {
                padding: 1.5rem;
            }
        }
    </style>
</head>
<body>
    <!-- Header -->
    <header id="header">
        <div class="container">
            <nav class="navbar">
                <a href="#" class="logo">
                    <div class="logo-icon">O</div>
                    Octet Systems
                </a>
                <ul class="nav-links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Solutions</a></li>
                    <li><a href="#" class="active">Cybersecurity</a></li>
                    <li><a href="#">Training</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <button class="mobile-menu-btn">
                    <i class="fas fa-bars"></i>
                </button>
            </nav>
        </div>
    </header>

    <!-- Hero Section -->
    <section class="hero">
        <div class="container">
            <h1>Advanced Cybersecurity Solutions</h1>
            <p>Protecting your digital future with cutting-edge security intelligence and innovative technology solutions developed from Africa for the world.</p>
            <div class="hero-buttons">
                <a href="#anonymous-reporting" class="btn btn-primary btn-large">
                    <i class="fas fa-shield-alt"></i>
                    Explore Security Tools
                </a>
                <a href="#" class="btn btn-secondary btn-large">
                    <i class="fas fa-play-circle"></i>
                    Watch Demo
                </a>
            </div>
        </div>
    </section>

    <!-- Main Content -->
    <div class="container">
        <!-- Anonymous Reporting Section -->
        <section id="anonymous-reporting" class="security-section">
            <div class="section-header">
                <h2>Anonymous Security Reporting</h2>
                <p>Report security concerns with complete anonymity. Your privacy is our priority.</p>
            </div>
            
            <div class="privacy-notice">
                <i class="fas fa-lock"></i>
                <p>No IP logging • No cookies • End-to-end encrypted • No personal data collected</p>
            </div>
            
            <form id="secure-report-form" class="tor-compatible">
                <div class="form-group">
                    <label for="report-type">Report Type</label>
                    <select id="report-type" name="report-type" required>
                        <option value="">Select category</option>
                        <option value="vulnerability">Security Vulnerability</option>
                        <option value="incident">Security Incident</option>
                        <option value="phishing">Phishing Attempt</option>
                        <option value="malware">Malware Infection</option>
                        <option value="other">Other Concern</option>
                    </select>
                </div>
                
                <div class="form-group">
                    <label for="description">Detailed Description</label>
                    <textarea id="description" name="description" placeholder="Please provide as much detail as possible..." required maxlength="2000"></textarea>
                </div>
                
                <div class="form-group">
                    <label>Attach Evidence (Optional)</label>
                    <div class="secure-upload">
                        <p><i class="fas fa-cloud-upload-alt"></i> Drag & drop files here or click to browse</p>
                        <input type="file" name="evidence" accept=".jpg,.png,.pdf,.txt" data-max-size="10MB">
                    </div>
                </div>
                
                <button type="submit" class="btn btn-primary btn-large">
                    <i class="fas fa-paper-plane"></i>
                    Submit Anonymously
                </button>
            </form>
            
            <div class="security-features">
                <h3>Your Privacy is Protected</h3>
                <ul>
                    <li><i class="fas fa-check-circle"></i> No user tracking or analytics</li>
                    <li><i class="fas fa-check-circle"></i> Automatic data purge after 90 days</li>
                    <li><i class="fas fa-check-circle"></i> Client-side encryption before transmission</li>
                    <li><i class="fas fa-check-circle"></i> Tor network compatible</li>
                </ul>
            </div>
        </section>

        <!-- Phishing Scanner Section -->
        <section id="phishing-scanner" class="security-section">
            <div class="section-header">
                <h2>Phishing Link Scanner</h2>
                <p>Check suspicious links before clicking. Our AI analyzes multiple threat intelligence feeds in real-time.</p>
            </div>
            
            <div class="scanner-interface">
                <div class="input-group">
                    <input type="url" id="url-scanner" placeholder="https://suspicious-website.com" pattern="https?://.+" required>
                    <button id="scan-button" class="btn btn-primary">
                        <i class="fas fa-search"></i>
                        Scan URL
                    </button>
                </div>
                
                <div id="scan-results" class="results-container" aria-live="polite">
                    <!-- Dynamic results will appear here -->
                </div>
            </div>
            
            <div class="threat-indicators">
                <h3>What We Check For:</h3>
                <div class="indicator-grid">
                    <div class="indicator">
                        <i class="fas fa-bug"></i>
                        <span>Known Malware Domains</span>
                    </div>
                    <div class="indicator">
                        <i class="fas fa-fish"></i>
                        <span>Phishing Database Matches</span>
                    </div>
                    <div class="indicator">
                        <i class="fas fa-exclamation-triangle"></i>
                        <span>Suspicious URL Patterns</span>
                    </div>
                    <div class="indicator">
                        <i class="fas fa-certificate"></i>
                        <span>SSL Certificate Issues</span>
                    </div>
                </div>
            </div>
        </section>

        <!-- Password Strength Checker -->
        <section id="password-checker" class="security-section">
            <div class="section-header">
                <h2>Password Strength Analyzer</h2>
                <p>Test how secure your passwords are against common attacks with our advanced analysis tool.</p>
            </div>
            
            <div class="checker-interface">
                <div class="password-input-wrapper">
                    <input type="password" id="password-input" placeholder="Enter password to analyze" aria-describedby="password-strength">
                    <button id="toggle-visibility" class="btn-icon" aria-label="Show password">
                        <i class="fas fa-eye"></i>
                    </button>
                </div>
                
                <div class="strength-meter">
                    <div class="strength-bar">
                        <div class="strength-fill" id="strength-fill"></div>
                    </div>
                    <div class="strength-labels">
                        <span>Very Weak</span>
                        <span>Weak</span>
                        <span>Fair</span>
                        <span>Strong</span>
                        <span>Very Strong</span>
                    </div>
                </div>
                
                <div id="password-feedback" class="feedback-panel">
                    <h4>Security Analysis:</h4>
                    <ul id="feedback-list">
                        <!-- Dynamic feedback will appear here -->
                    </ul>
                </div>
                
                <div class="security-metrics">
                    <div class="metric">
                        <span class="metric-value" id="crack-time">--</span>
                        <span class="metric-label">Time to Crack</span>
                    </div>
                    <div class="metric">
                        <span class="metric-value" id="entropy-score">--</span>
                        <span class="metric-label">Entropy Score</span>
                    </div>
                </div>
            </div>
        </section>

        <!-- Password Game Section -->
        <section id="password-game" class="security-game">
            <div class="section-header">
                <h2>Password Defender Game</h2>
                <p>Learn password security through interactive challenges and improve your cyber hygiene.</p>
            </div>
            
            <div class="game-container">
                <div class="game-stats">
                    <div class="stat">
                        <span class="stat-value" id="game-score">0</span>
                        <span class="stat-label">Security Points</span>
                    </div>
                    <div class="stat">
                        <span class="stat-value" id="game-level">1</span>
                        <span class="stat-label">Level</span>
                    </div>
                </div>
                
                <div class="game-area">
                    <div id="game-scenario" class="scenario-card">
                        <h3>Scenario: Social Media Account</h3>
                        <p>Create a strong password for your social media account that includes:</p>
                        <ul id="requirements-list">
                            <li data-requirement="length">At least 12 characters</li>
                            <li data-requirement="uppercase">One uppercase letter</li>
                            <li data-requirement="number">One number</li>
                            <li data-requirement="special">One special character</li>
                        </ul>
                        
                        <input type="text" id="game-password-input" placeholder="Create your password...">
                        
                        <div class="game-feedback" id="game-feedback"></div>
                        
                        <button id="submit-password" class="btn btn-game">
                            <i class="fas fa-check"></i>
                            Check Password
                        </button>
                    </div>
                    
                    <div class="game-progress">
                        <div class="progress-bar">
                            <div class="progress-fill" id="game-progress"></div>
                        </div>
                        <span>Learning Progress</span>
                    </div>
                </div>
                
                <div class="game-tips">
                    <h4>Pro Tips:</h4>
                    <div class="tip-carousel">
                        <div class="tip active">Use passphrases instead of passwords: "PurpleElephantsDance@Moon42"</div>
                        <div class="tip">Avoid common substitutions: "P@ssw0rd" is still weak and predictable</div>
                        <div class="tip">Consider using a password manager for unique passwords everywhere</div>
                        <div class="tip">Enable two-factor authentication whenever possible for added security</div>
                    </div>
                </div>
            </div>
        </section>
    </div>

    <!-- Footer -->
    <footer>
        <div class="container">
            <div class="footer-content">
                <div class="footer-logo">
                    <div class="logo-icon">O</div>
                    Octet Systems
                </div>
                <p>Setting New Trends in Technology</p>
                <div class="footer-links">
                    <a href="#">Home</a>
                    <a href="#">Solutions</a>
                    <a href="#">Cybersecurity</a>
                    <a href="#">Training</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                </div>
                <p class="copyright">© 2023 Octet Systems. All rights reserved.<br>Area 48, Bingu National Stadium – Corporate Box E14, Lilongwe, Malawi</p>
            </div>
        </div>
    </footer>

    <script>
        // Header scroll effect
        window.addEventListener('scroll', function() {
            const header = document.getElementById('header');
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // Mobile menu toggle
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const navLinks = document.querySelector('.nav-links');
        
        mobileMenuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            const icon = mobileMenuBtn.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        // Password Strength Checker
        document.addEventListener('DOMContentLoaded', function() {
            const passwordInput = document.getElementById('password-input');
            const toggleVisibility = document.getElementById('toggle-visibility');
            const strengthFill = document.getElementById('strength-fill');
            const feedbackList = document.getElementById('feedback-list');
            const crackTime = document.getElementById('crack-time');
            const entropyScore = document.getElementById('entropy-score');
            const eyeIcon = toggleVisibility.querySelector('i');
            
            // Toggle password visibility
            toggleVisibility.addEventListener('click', function() {
                if (passwordInput.type === 'password') {
                    passwordInput.type = 'text';
                    eyeIcon.classList.remove('fa-eye');
                    eyeIcon.classList.add('fa-eye-slash');
                } else {
                    passwordInput.type = 'password';
                    eyeIcon.classList.remove('fa-eye-slash');
                    eyeIcon.classList.add('fa-eye');
                }
            });
            
            // Analyze password strength
            passwordInput.addEventListener('input', function() {
                const password = passwordInput.value;
                analyzePassword(password);
            });
            
            function analyzePassword(password) {
                let strength = 0;
                const feedback = [];
                
                // Length check
                if (password.length >= 12) {
                    strength += 20;
                    feedback.push({text: "At least 12 characters", valid: true});
                } else {
                    feedback.push({text: "At least 12 characters", valid: false});
                }
                
                // Uppercase check
                if (/[A-Z]/.test(password)) {
                    strength += 15;
                    feedback.push({text: "Contains uppercase letter", valid: true});
                } else {
                    feedback.push({text: "Contains uppercase letter", valid: false});
                }
                
                // Lowercase check
                if (/[a-z]/.test(password)) {
                    strength += 15;
                    feedback.push({text: "Contains lowercase letter", valid: true});
                } else {
                    feedback.push({text: "Contains lowercase letter", valid: false});
                }
                
                // Numbers check
                if (/[0-9]/.test(password)) {
                    strength += 15;
                    feedback.push({text: "Contains number", valid: true});
                } else {
                    feedback.push({text: "Contains number", valid: false});
                }
                
                // Special characters check
                if (/[^A-Za-z0-9]/.test(password)) {
                    strength += 15;
                    feedback.push({text: "Contains special character", valid: true});
                } else {
                    feedback.push({text: "Contains special character", valid: false});
                }
                
                // No common patterns
                if (!/(.)\1{2,}/.test(password) && 
                    !/(123|abc|password|qwerty|admin|welcome)/i.test(password)) {
                    strength += 20;
                    feedback.push({text: "No obvious patterns or common passwords", valid: true});
                } else {
                    feedback.push({text: "No obvious patterns or common passwords", valid: false});
                }
                
                // Update UI
                updateStrengthIndicator(strength);
                updateFeedback(feedback);
                updateMetrics(password);
            }
            
            function updateStrengthIndicator(strength) {
                const strengthPercentage = Math.min(strength, 100);
                strengthFill.style.width = `${strengthPercentage}%`;
                
                // Change color based on strength
                if (strengthPercentage < 40) {
                    strengthFill.style.backgroundColor = 'var(--alert)';
                } else if (strengthPercentage < 60) {
                    strengthFill.style.backgroundColor = 'var(--warning)';
                } else if (strengthPercentage < 80) {
                    strengthFill.style.backgroundColor = '#FFCC00';
                } else {
                    strengthFill.style.backgroundColor = 'var(--success)';
                }
            }
            
            function updateFeedback(feedbackItems) {
                feedbackList.innerHTML = '';
                
                feedbackItems.forEach(item => {
                    const li = document.createElement('li');
                    li.textContent = item.text;
                    if (item.valid) {
                        li.classList.add('valid');
                        li.innerHTML = '<i class="fas fa-check-circle"></i> ' + item.text;
                    } else {
                        li.classList.add('invalid');
                        li.innerHTML = '<i class="fas fa-times-circle"></i> ' + item.text;
                    }
                    feedbackList.appendChild(li);
                });
            }
            
            function updateMetrics(password) {
                // Simple entropy calculation
                const charSetSize = calculateCharSetSize(password);
                const bitsOfEntropy = password.length * Math.log2(charSetSize);
                
                entropyScore.textContent = Math.round(bitsOfEntropy);
                
                // Estimate crack time (simplified)
                if (bitsOfEntropy < 40) {
                    crackTime.textContent = "Instantly";
                } else if (bitsOfEntropy < 60) {
                    crackTime.textContent = "Hours";
                } else if (bitsOfEntropy < 80) {
                    crackTime.textContent = "Years";
                } else {
                    crackTime.textContent = "Centuries";
                }
            }
            
            function calculateCharSetSize(password) {
                let size = 0;
                if (/[a-z]/.test(password)) size += 26;
                if (/[A-Z]/.test(password)) size += 26;
                if (/[0-9]/.test(password)) size += 10;
                if (/[^A-Za-z0-9]/.test(password)) size += 32;
                return size || 1; // Avoid division by zero
            }
            
            // Phishing Scanner Simulation
            const scanButton = document.getElementById('scan-button');
            const urlInput = document.getElementById('url-scanner');
            const scanResults = document.getElementById('scan-results');
            
            scanButton.addEventListener('click', function() {
                const url = urlInput.value.trim();
                
                if (!url) {
                    alert('Please enter a URL to scan');
                    return;
                }
                
                // Simulate scanning process
                scanResults.style.display = 'block';
                scanResults.innerHTML = `
                    <div style="text-align: center; padding: 1rem;">
                        <div class="loading-spinner" style="width: 40px; height: 40px; border: 4px solid #f3f3f3; border-top: 4px solid var(--accent); border-radius: 50%; animation: spin 1s linear infinite; margin: 0 auto;"></div>
                        <p style="margin-top: 1rem;">Scanning URL for security threats...</p>
                    </div>
                `;
                
                setTimeout(() => {
                    // Simulated results
                    const isSafe = Math.random() > 0.3; // 70% chance of being safe
                    
                    if (isSafe) {
                        scanResults.innerHTML = `
                            <div style="color: var(--success); text-align: center;">
                                <i class="fas fa-check-circle" style="font-size: 3rem; margin-bottom: 1rem;"></i>
                                <h3 style="color: var(--success); margin-bottom: 0.5rem;">This URL appears to be safe</h3>
                                <p>No known threats detected in our database</p>
                            </div>
                        `;
                    } else {
                        scanResults.innerHTML = `
                            <div style="color: var(--alert); text-align: center;">
                                <i class="fas fa-exclamation-triangle" style="font-size: 3rem; margin-bottom: 1rem;"></i>
                                <h3 style="color: var(--alert); margin-bottom: 0.5rem;">Potential security risk detected</h3>
                                <p>This URL matches known phishing patterns</p>
                                <p style="margin-top: 1rem;"><strong>Recommendation:</strong> Do not visit this site</p>
                            </div>
                        `;
                    }
                }, 2000);
            });
            
            // Password Game
            const gamePasswordInput = document.getElementById('game-password-input');
            const submitPasswordBtn = document.getElementById('submit-password');
            const gameFeedback = document.getElementById('game-feedback');
            const gameScore = document.getElementById('game-score');
            const gameLevel = document.getElementById('game-level');
            const gameProgress = document.getElementById('game-progress');
            const requirementsList = document.getElementById('requirements-list');
            
            let score = 0;
            let level = 1;
            let progress = 0;
            
            submitPasswordBtn.addEventListener('click', function() {
                const password = gamePasswordInput.value;
                checkGamePassword(password);
            });
            
            function checkGamePassword(password) {
                const requirements = [
                    { id: 'length', test: password.length >= 12 },
                    { id: 'uppercase', test: /[A-Z]/.test(password) },
                    { id: 'number', test: /[0-9]/.test(password) },
                    { id: 'special', test: /[^A-Za-z0-9]/.test(password) }
                ];
                
                let passed = 0;
                let feedbackText = "";
                
                requirements.forEach(req => {
                    const requirementElement = document.querySelector(`[data-requirement="${req.id}"]`);
                    
                    if (req.test) {
                        requirementElement.classList.add('requirement-met');
                        passed++;
                    } else {
                        requirementElement.classList.remove('requirement-met');
                    }
                });
                
                if (passed === requirements.length) {
                    feedbackText = "Excellent! You've created a strong password!";
                    score += 10;
                    progress += 25;
                    
                    if (progress >= 100) {
                        level++;
                        progress = 0;
                        feedbackText += ` Level up! You're now at level ${level}.`;
                    }
                    
                    // Reset for next round
                    setTimeout(() => {
                        requirements.forEach(req => {
                            const requirementElement = document.querySelector(`[data-requirement="${req.id}"]`);
                            requirementElement.classList.remove('requirement-met');
                        });
                        gamePasswordInput.value = '';
                    }, 3000);
                } else {
                    feedbackText = "Keep trying! Make sure your password meets all requirements.";
                }
                
                gameFeedback.textContent = feedbackText;
                gameFeedback.style.display = 'flex';
                gameScore.textContent = score;
                gameLevel.textContent = level;
                gameProgress.style.width = `${progress}%`;
            }
            
            // Tip carousel
            const tips = document.querySelectorAll('.tip');
            let currentTip = 0;
            
            setInterval(() => {
                tips[currentTip].classList.remove('active');
                currentTip = (currentTip + 1) % tips.length;
                tips[currentTip].classList.add('active');
            }, 5000);
            
            // Anonymous report form submission
            const reportForm = document.getElementById('secure-report-form');
            
            reportForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // In a real implementation, this would send the encrypted report to a server
                alert('Thank you for your anonymous report. Your information has been securely submitted.');
                reportForm.reset();
            });
        });
    </script>
</body>
</html>