const usageTips = [
  "Calculate: (18 + 6) ÷ 3",
  "Multiplique o resultado anterior por 4",
  "Tengo 6 cajas con 12 artículos cada una",
  "How much is 125 divided by 5?",
  "Quanto é cinco mais quatro?",
  "Now divide the result by 2",
];

function UsageTips() {
  return (
    <section className="usage-tips">
      <h2>Experimente alguma dessas mensagens 💬

</h2>

      <ul>
        {usageTips.map((tip) => (
          <li key={tip}>
            {tip}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default UsageTips;