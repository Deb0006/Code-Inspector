import data from "./codedata.js";
import Examples from "../components/Examples";
const Results = () => {
  // console.log(data.data.code[1].code);
  const cards = data.map((item) => {
    return <Examples key={item.id} code={item.code} result={item.result} />;
  });
  return (
    <>
      <div className="wrapper">
        <h1>Examples</h1>
        <p>These code descriptions were generated in this website:</p>
        {cards}
        <style jsx>{`
          .wrapper {
            dislplay: flex;
            justify-content: center;
          }
        `}</style>
      </div>
    </>
  );
};

export default Results;
