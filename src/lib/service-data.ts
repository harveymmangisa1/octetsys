import React from 'react';
import { serviceData, IService, IPackage } from './data';
import { ArrowRight, Check, Star } from 'lucide-react';

interface ServiceCardProps {
  serviceId: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ serviceId }) => {
  const service: IService = serviceData[serviceId];
  if (!service) return null;

  return (
    <div className="service-card">
      {/* Header with icon and badge */}
      <div className="service-header">
        <div className="service-icon">
          <service.icon size={24} />
        </div>
        {service.badge && (
          <span className="service-badge">{service.badge}</span>
        )}
      </div>

      {/* Title and description */}
      <h3 className="service-title">{service.title}</h3>
      <p className="service-subtitle">{service.subtitle}</p>
      <p className="service-description">{service.description}</p>

      {/* Features grid */}
      <div className="features-grid">
        {service.features?.map((feature, index) => (
          <div key={index} className="feature-item">
            <feature.icon size={16} />
            <span>{feature.text}</span>
          </div>
        ))}
      </div>

      {/* Metrics showcase */}
      {service.metrics && (
        <div className="metrics-grid">
          {service.metrics.map((metric, index) => (
            <div key={index} className="metric-item">
              <div className="metric-value">{metric.value}</div>
              <div className="metric-label">{metric.label}</div>
            </div>
          ))}
        </div>
      )}

      {/* CTA */}
      <button className="cta-button">
        Explore Service
        <ArrowRight size={16} />
      </button>
    </div>
  );
};

interface PricingCardProps {
  pkg: IPackage;
}

const PricingCard: React.FC<PricingCardProps> = ({ pkg }) => {
  return (
    <div className={`pricing-card ${pkg.popular ? 'popular' : ''}`}>
      {pkg.popular && (
        <div className="popular-badge">
          <Star size={16} />
          Most Popular
        </div>
      )}
      
      <div className="pricing-header">
        <h4>{pkg.name}</h4>
        <div className="price">
          ${pkg.price}
          <span>/{pkg.period}</span>
        </div>
        <p className="package-description">{pkg.description}</p>
      </div>

      <div className="features-list">
        {pkg.features.map((feature, index) => (
          <div key={index} className="feature-line">
            {feature.included ? (
              <Check size={16} className="included" />
            ) : (
              <div className="excluded" />
            )}
            <span className={feature.included ? '' : 'excluded-text'}>
              {feature.text}
            </span>
          </div>
        ))}
      </div>

      <button className={`purchase-btn ${pkg.popular ? 'primary' : 'secondary'}`}>
        {pkg.cta || 'Get Started'}
      </button>
    </div>
  );
};

// CSS Styles (to be added to your stylesheet)
const styles = `
.service-card {
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
  transition: all 0.3s ease;
}

.service-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}

.service-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 16px;
}

.service-icon {
  background: #3b82f6;
  color: white;
  padding: 12px;
  border-radius: 8px;
}

.service-badge {
  background: #10b981;
  color: white;
  padding: 4px 8px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
}

.service-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 4px;
}

.service-subtitle {
  color: #6b7280;
  font-size: 0.875rem;
  margin-bottom: 12px;
}

.service-description {
  color: #4b5563;
  line-height: 1.6;
  margin-bottom: 20px;
}

.features-grid {
  display: grid;
  gap: 12px;
  margin-bottom: 20px;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #374151;
}

.metrics-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-bottom: 20px;
  padding: 16px;
  background: #f8fafc;
  border-radius: 8px;
}

.metric-item {
  text-align: center;
}

.metric-value {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1e40af;
}

.metric-label {
  font-size: 0.75rem;
  color: #6b7280;
}

.cta-button {
  width: 100%;
  background: #3b82f6;
  color: white;
  border: none;
  padding: 12px 16px;
  border-radius: 8px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: background 0.3s ease;
}

.cta-button:hover {
  background: #2563eb;
}

.pricing-card {
  position: relative;
  background: white;
  border-radius: 12px;
  padding: 24px;
  border: 2px solid #e5e7eb;
  transition: all 0.3s ease;
}

.pricing-card.popular {
  border-color: #3b82f6;
  transform: scale(1.05);
}

.popular-badge {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: #3b82f6;
  color: white;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 4px;
}

.pricing-header {
  text-align: center;
  margin-bottom: 24px;
}

.price {
  font-size: 2rem;
  font-weight: 700;
  color: #1f2937;
  margin: 8px 0;
}

.price span {
  font-size: 1rem;
  color: #6b7280;
}

.features-list {
  space-y: 12px;
  margin-bottom: 24px;
}

.feature-line {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
}

.included {
  color: #10b981;
}

.excluded {
  width: 16px;
  height: 16px;
  border: 2px solid #d1d5db;
  border-radius: 50%;
}

.excluded-text {
  color: #9ca3af;
}

.purchase-btn {
  width: 100%;
  padding: 12px 16px;
  border-radius: 8px;
  font-weight: 600;
  border: none;
  transition: all 0.3s ease;
}

.purchase-btn.primary {
  background: #3b82f6;
  color: white;
}

.purchase-btn.secondary {
  background: #f3f4f6;
  color: #374151;
}
`;

export { ServiceCard, PricingCard };