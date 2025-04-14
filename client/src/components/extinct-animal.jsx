import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../style/extinct-animal.css';
import Header from '../common-components/header';
import Footer from '../common-components/footer';

const ExtinctAnimalsTable = () => {
  const [animals, setAnimals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

  useEffect(() => {
    const fetchExtinctAnimals = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/extinct-water-animals');
        setAnimals(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch extinct animals');
        setLoading(false);
      }
    };

    fetchExtinctAnimals();
  }, []);

  // Sorting function
  const sortTable = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  // Sorting logic
  const sortedAnimals = [...animals].sort((a, b) => {
    if (sortConfig.key) {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? 1 : -1;
      }
    }
    return 0;
  });

  // Filtering logic
  const filteredAnimals = sortedAnimals.filter(animal =>
    animal.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    animal.biologicalName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      <Header />
      <hr />
      <div className="extinct-animals-container">
        <h1>Extinct Water Animals</h1>

        <input
          type="text"
          placeholder="Search animals..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />

        <table className="extinct-animals-table">
          <thead>
            <tr>
              <th onClick={() => sortTable('name')}>
                Name {sortConfig.key === 'name' && (sortConfig.direction === 'ascending' ? '▲' : '▼')}
              </th>
              <th onClick={() => sortTable('biologicalName')}>
                Biological Name {sortConfig.key === 'biologicalName' && (sortConfig.direction === 'ascending' ? '▲' : '▼')}
              </th>
              <th onClick={() => sortTable('yearExtinct')}>
                Extinction Year {sortConfig.key === 'yearExtinct' && (sortConfig.direction === 'ascending' ? '▲' : '▼')}
              </th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {filteredAnimals.map((animal, index) => (
              <tr key={index}>
                <td>{animal.name}</td>
                <td>{animal.biologicalName}</td>
                <td>{animal.yearExtinct}</td>
                <td>
                  <img
                    src={animal.image}
                    alt={animal.name}
                    style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
};

export default ExtinctAnimalsTable;