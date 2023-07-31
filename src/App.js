
import './App.css';
import {useState,useEffect} from 'react';
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';
function App() {
const [bots, setBots] = useState([]);
const [yourBotArmy, setYourBotArmy] = useState([]);
useEffect(() => {
    
    fetch('https://api.npoint.io/c65614df706072733c71') 
      .then((response) => response.json())
      .then((data) => setBots(data.bots))
      .catch((error) => console.error('Error fetching bot data:', error));
  }, []);

  const handleAddToArmy = (botId) => {
    if (!yourBotArmy.includes(botId)) {
      setYourBotArmy([...yourBotArmy, botId]);
    }
  };

  const handleReleaseFromArmy = (botId) => {
    setYourBotArmy(yourBotArmy.filter((id) => id !== botId));
  };

  const handleDischarge = (botId) => {
  setYourBotArmy(yourBotArmy.filter((id) => id !== botId));
    setBots(bots.filter((bot) => bot.id !== botId));
  };
  return (
    <div className ="App bg-gradient-to-r from-purple-500 to-pink-500 ">
      <hr />
      <h1 class ="text-4xl text-purple-900 font-semibold m-5 ... flex items-center justify-center ;">Your Bot Army</h1><hr />
      <YourBotArmy
        bots={bots.filter((bot) => yourBotArmy.includes(bot.id))}
        onReleaseFromArmy={handleReleaseFromArmy}
        onDischarge={handleDischarge}
     />
     <hr />
     <h1 class ="text-4xl text-purple-900 font-bold m-5 ... flex items-center justify-center ;">Bot Collection</h1>
     <hr />
      <BotCollection bots={bots} yourBotArmy={yourBotArmy} onAddToArmy={handleAddToArmy} />
    </div>
  
  );
}

export default App;
