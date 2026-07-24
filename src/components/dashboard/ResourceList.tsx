const resources = [
  "Memória contextual",
  "Multi-idioma",
  "Ferramentas matemáticas",
  "Agentes especializados",
];

function ResourceList() {
  return (
    <section className="resource-list">
      <h2>Recursos</h2>

      <ul>
        {resources.map((resource) => (
          <li key={resource}>
            {resource}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ResourceList;