import data from "./codedata.js";
import Examples from "../components/Examples";
const Results = () => {
  // console.log(data.data.code[1].code);
  const cards = data.map((item) => {
    return <Examples key={item.id} code={item.code} result={item.result} />;
  });
  return (
    <div className="wrapper" style={{ margin: "0 auto" }}>
      <h1>Examples</h1>
      <p>These code descriptions were generated in this website:</p>
      {cards}
    </div>
  );
};

export default Results;
