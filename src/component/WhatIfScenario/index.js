import './style.scss'

const WhatIfScenario = () => {
  const demos = {
    soundcloud:
      '<iframe width="100%" height="800" scrolling="no" frameborder="no" allow="autoplay" src="https://app.powerbi.com/view?r=eyJrIjoiNzY5NDA5ZTctM2NmMS00YjM0LWFhODgtMWNkZGM0OGI3ZWI5IiwidCI6IjFjMmJlMTE2LWQyMDctNDJmMy05NTJiLWM2NjI4OTc0NTg3OSIsImMiOjZ9"></iframe>',
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
