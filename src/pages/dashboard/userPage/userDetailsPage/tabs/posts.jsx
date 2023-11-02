import React from 'react';

const titles = [
  "How do I put an 'if clause' in an SQL string?",
  'SQL “between” not inclusive',
  'Is there a performance difference between CTE , Sub-Query, Temporary Table or Table Variable?',
  'Is there a LastIndexOf in SQL Server?'
];

const posts = () => {
  const renderItems = () => {
    const mas = [];
    for (let i = 0; i < 10; i++) {
      mas.push(
        <div className="dashboard-users__list-item">
          <div className="dashboard-users__list-count">123</div>
          <a href="#" className="dashboard-users__list-title">
            {titles[i % 4]}
          </a>
          <div className="dashboard-users__list-date">21-01-2019</div>
        </div>
      );
    }

    return mas;
  };

  return <div className="dashboard-users__list">{renderItems()}</div>;
};

export default posts;
