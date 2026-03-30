import React from 'react';

interface PhoneMockupProps {
  variant?: 'scan' | 'analyze' | 'shop';
  className?: string;
}

const PhoneMockup: React.FC<PhoneMockupProps> = ({ variant = 'scan', className = '' }) => {
  const screens: Record<string, React.ReactNode> = {
    scan: (
      <div className="phone-screen phone-screen--scan">
        <div className="screen-header">
          <span className="screen-header__title">Scan Product</span>
        </div>
        <div className="screen-viewfinder">
          <div className="viewfinder-corners">
            <div className="corner corner--tl" />
            <div className="corner corner--tr" />
            <div className="corner corner--bl" />
            <div className="corner corner--br" />
          </div>
          <div className="viewfinder-barcode">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="barcode-line" style={{ height: `${20 + Math.random() * 30}px` }} />
            ))}
          </div>
        </div>
        <div className="screen-bottom-pill">Point camera at barcode</div>
      </div>
    ),
    analyze: (
      <div className="phone-screen phone-screen--analyze">
        <div className="screen-header">
          <span className="screen-header__title">Health Score</span>
        </div>
        <div className="score-circle">
          <svg viewBox="0 0 100 100" className="score-ring">
            <circle cx="50" cy="50" r="42" fill="none" stroke="var(--color-bg-secondary)" strokeWidth="8" />
            <circle cx="50" cy="50" r="42" fill="none" stroke="var(--color-primary)" strokeWidth="8"
              strokeDasharray="264" strokeDashoffset="53" strokeLinecap="round"
              transform="rotate(-90 50 50)" />
          </svg>
          <span className="score-value">8.2</span>
          <span className="score-label">Great</span>
        </div>
        <div className="analysis-pills">
          <span className="pill pill--good">Low Sugar</span>
          <span className="pill pill--warn">Moderate Sodium</span>
          <span className="pill pill--good">No Additives</span>
        </div>
      </div>
    ),
    shop: (
      <div className="phone-screen phone-screen--shop">
        <div className="screen-header">
          <span className="screen-header__title">Alternatives</span>
        </div>
        <div className="alt-list">
          {[
            { name: 'Organic Oats', score: 9.4, color: 'var(--color-primary)' },
            { name: 'Whole Grain Mix', score: 8.8, color: 'var(--color-primary)' },
            { name: 'Quinoa Blend', score: 8.5, color: 'var(--color-accent)' },
          ].map((item, i) => (
            <div key={i} className="alt-card">
              <div className="alt-card__icon" style={{ background: item.color }} />
              <div className="alt-card__info">
                <span className="alt-card__name">{item.name}</span>
                <div className="alt-card__bar">
                  <div className="alt-card__fill" style={{ width: `${item.score * 10}%`, background: item.color }} />
                </div>
              </div>
              <span className="alt-card__score">{item.score}</span>
            </div>
          ))}
        </div>
        <button className="screen-cta">Order via Instacart</button>
      </div>
    ),
  };

  return (
    <div className={`phone-mockup ${className}`}>
      <div className="phone-mockup__frame">
        <div className="phone-mockup__notch" />
        <div className="phone-mockup__content">
          {screens[variant]}
        </div>
      </div>
    </div>
  );
};

export default PhoneMockup;
