import React from 'react';

const BotCollection = ({ bots, yourBotArmy, onAddToArmy }) => {
  return (
    <div className="grid grid-cols-1 gap-4  md:grid-cols-2 lg:grid-cols-3 ">
      {bots.map((bot) => (
        <div key={bot.id} className="border p-4">
          <h3 className="text-2xl  text-center font-semibold mb-4 text-pink-900">{bot.name}</h3>
          <img src={bot.avatar_url} alt={bot.name} className="w-24 h-24 rounded-full my-2 bg-gradient-to-r from-pink-300 to-blue-00 mx-auto" />

          <p>Health: {bot.health}</p>
          <p>Damage: {bot.damage}</p>
          <p>Armor: {bot.armor}</p>
          <p>Class: {bot.bot_class}</p>
          <p >Catchphrase: {bot.catchphrase}</p>
          <p>Created At: {new Date(bot.created_at).toLocaleString()}</p>
          <p>Updated At: {new Date(bot.updated_at).toLocaleString()}</p>
          <button
            onClick={() => onAddToArmy(bot.id)}
            className={`px-4 py-2 mt-4 w-full ${
              yourBotArmy.includes(bot.id) ? 'bg-gradient-to-r from-purple-400 to-pink-300' : 'bg-gradient-to-r from-purple-600 to-pink-600'
            } text-white font-semibold rounded-full`}
            disabled={yourBotArmy.includes(bot.id)}
          >
            Add to Army
          </button>
        </div>
      ))}
    </div>
  );
};

export default BotCollection;
