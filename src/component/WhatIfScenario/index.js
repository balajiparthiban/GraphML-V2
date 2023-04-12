import './style.scss'

const WhatIfScenario = () => {
  const demos = {
    soundcloud:
      '<iframe width="100%" height="700" scrolling="no" frameborder="no" allow="autoplay" src="https://app.powerbi.com/view?r=eyJrIjoiNzgyYzdhZmMtZWVlNi00NmVhLTkwZDQtOWVjYWJiOWQ0N2U0IiwidCI6ImZmNzE5MTFhLTg5MzUtNDBiNS05NTk3LWFjNGU5MGRjYzIyMSJ9"></iframe>',
  };

  function Iframe(props) {
    return (
      <div
        dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : "" }}
      />
    );
  }

  return (
    <div className="what-if-scenario">
      <h3>What If Scenario</h3>
      <Iframe iframe={demos["soundcloud"]} allow="autoplay" />
    </div>
  );
}

export default WhatIfScenario;
