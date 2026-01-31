import { MessageCircle } from 'lucide-react';

const ElevenLabsWidget = () => {
  const handleClick = () => {
    window.location.href = 'https://elevenlabs.io/app/talk-to?agent_id=agent_2001ke452dpcfqgsp4a62v2cx34j&branch_id=agtbrch_9601ke452eddeqxbdh3m511d225y';
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-110"
      aria-label="Talk to AI Assistant"
    >
      <MessageCircle className="h-6 w-6" />
    </button>
  );
};

export default ElevenLabsWidget;
