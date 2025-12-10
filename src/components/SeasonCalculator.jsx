import { useState } from 'react';

const SeasonCalculator = () => {
    const [drivewayType, setDrivewayType] = useState('single');
    const [visits, setVisits] = useState(15);

    // Pricing Assumptions (Approximate)
    const prices = {
        single: { season: 650, visit: 60 },
        double: { season: 750, visit: 70 },
        triple: { season: 850, visit: 80 }
    };

    const currentPrice = prices[drivewayType];
    const payPerVisitCost = visits * currentPrice.visit;
    const seasonCost = currentPrice.season;
    const savings = payPerVisitCost - seasonCost;

    return (
        <div className="calculator-card fade-in" style={{
            background: 'var(--white)',
            padding: '2rem',
            borderRadius: 'var(--radius-lg)',
            boxShadow: 'var(--shadow-md)',
            border: '1px solid var(--gray-200)',
            maxWidth: '500px',
            margin: '0 auto'
        }}>
            <h3 className="text-center" style={{ marginBottom: '1.5rem' }}>💰 Savings Calculator</h3>
            <p className="text-center" style={{ marginBottom: '2rem', fontSize: '0.9rem', color: '#64748b' }}>
                See if a seasonal contract is right for you.
            </p>

            <div className="form-group">
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Driveway Size</label>
                <select
                    value={drivewayType}
                    onChange={(e) => setDrivewayType(e.target.value)}
                    style={{ width: '100%', padding: '0.8rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--gray-200)' }}
                >
                    <option value="single">Single Car (approx $60/visit)</option>
                    <option value="double">Double Car (approx $70/visit)</option>
                    <option value="triple">Triple/Large (approx $80/visit)</option>
                </select>
            </div>

            <div className="form-group" style={{ marginTop: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>
                    Expected Clearing Visits <span style={{ color: 'var(--secondary-color)' }}>({visits})</span>
                </label>
                <input
                    type="range"
                    min="5"
                    max="30"
                    value={visits}
                    onChange={(e) => setVisits(parseInt(e.target.value))}
                    style={{ width: '100%', accentColor: 'var(--secondary-color)' }}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: '#94a3b8', marginTop: '0.3rem' }}>
                    <span>Light Winter (5)</span>
                    <span>Avg (15-20)</span>
                    <span>Heavy (30)</span>
                </div>
            </div>

            <div className="calc-results" style={{
                marginTop: '2rem',
                background: '#f8fafc',
                padding: '1.5rem',
                borderRadius: 'var(--radius-md)',
                textAlign: 'center'
            }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span>Pay-Per-Visit Cost:</span>
                    <strong>${payPerVisitCost}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                    <span>Seasonal Contract:</span>
                    <strong style={{ color: 'var(--primary-color)' }}>${seasonCost}</strong>
                </div>

                <div style={{
                    borderTop: '2px dashed var(--gray-200)',
                    paddingTop: '1rem',
                    color: savings > 0 ? '#16a34a' : '#ef4444',
                    fontWeight: 800,
                    fontSize: '1.25rem'
                }}>
                    {savings > 0 ? `You Save: $${savings}!` : `Extra Cost: $${Math.abs(savings)}`}
                </div>
            </div>

            <a href="/quote" className="btn btn-primary pulse-animation" style={{ width: '100%', marginTop: '1.5rem', textAlign: 'center' }}>
                Lock In Seasonal Rate
            </a>
        </div>
    );
};

export default SeasonCalculator;
