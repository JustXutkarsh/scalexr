import { useEffect } from 'react';

const ElevenLabsWidget = () => {
  useEffect(() => {
    // Load the ElevenLabs widget script
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@elevenlabs/convai-widget-embed';
    script.async = true;
    script.type = 'text/javascript';
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div 
      dangerouslySetInnerHTML={{ 
        __html: '<elevenlabs-convai agent-id="agent_2001ke452dpcfqgsp4a62v2cx34j" branch-id="agtbrch_9601ke452eddeqxbdh3m511d225y"></elevenlabs-convai>' 
      }} 
    />
  );
};

export default ElevenLabsWidget;
