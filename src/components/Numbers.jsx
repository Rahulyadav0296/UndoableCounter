import History from "./History";
function Numbers({ number, setNumber, stack, setStack }) {
  const maintainHistory = (key, prev, curr) => {
    console.log(key, prev, curr);
    const obj = {
      action: key,
      prev,
      curr,
    };
    const copyHistory = [...stack];
    copyHistory.unshift(obj);

    setStack(copyHistory);
  };

  const handleClick = (key) => {
    maintainHistory(key, number, key + number);
    setNumber((prev) => prev + key);
  };

  return (
    <>
      <div className="numbers">
        {[-100, -10, -1].map((btn) => {
          return (
            <button key={btn} onClick={() => handleClick(btn)}>
              {btn}
            </button>
          );
        })}
        <span>{number}</span>

        {[1, 10, 100].map((btn) => {
          return (
            <button key={btn} onClick={() => handleClick(btn)}>
              {btn}
            </button>
          );
        })}
      </div>
      <History stack={stack} />
    </>
  );
}

export default Numbers;
