// src/components/ZapierChatbot.jsx
import { useEffect } from "react";

const ZapierChatbot = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://interfaces.zapier.com/assets/web-components/zapier-interfaces/zapier-interfaces.esm.js";
    script.type = "module";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up to remove the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="chatbot-container bg-white">
      <zapier-interfaces-chatbot-embed 
        is-popup="true"
        chatbot-id="cm6bbv1ct00579k8c2itx9wnv"
        height="600px"
        width="400px"
      ></zapier-interfaces-chatbot-embed>
    </div>
  );
};

export default ZapierChatbot;



{/* <script async type='module' src='https://interfaces.zapier.com/assets/web-components/zapier-interfaces/zapier-interfaces.esm.js'></script>
<zapier-interfaces-chatbot-embed is-popup='true' chatbot-id='cm6bbv1ct00579k8c2itx9wnv'></zapier-interfaces-chatbot-embed> */}