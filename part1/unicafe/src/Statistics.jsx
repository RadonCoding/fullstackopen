import StatisticLine from "./StatisticLine";

const Statistics = ({ good, neutral, bad }) => {
  return (
    <>
      <h1>statistics</h1>
      {good + neutral + bad ? (
        <table>
          <tbody>
            <StatisticLine text="good" value={good}></StatisticLine>
            <StatisticLine text="neutral" value={neutral}></StatisticLine>
            <StatisticLine text="bad" value={bad}></StatisticLine>
            <StatisticLine
              text="all"
              value={good + neutral + bad}
            ></StatisticLine>
            <StatisticLine
              text="average"
              value={(good - bad) / (good + bad) || 0}
            ></StatisticLine>
            <StatisticLine
              text="positive"
              value={`${(good / (good + neutral + bad)) * 100 || 0}%`}
            ></StatisticLine>
          </tbody>
        </table>
      ) : (
        <p>no feedback given</p>
      )}
    </>
  );
};

export default Statistics;
