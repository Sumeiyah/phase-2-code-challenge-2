import React from 'react';

const YourBotArmy = ({ bots, onReleaseFromArmy, onDischarge }) => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 ">
      {bots.map((bot) => (
        <div key={bot.id} className="border p-4">
          <h3 className="text-2xl font-semibold mb-2 text-center text-pink-900">{bot.name}</h3>
                    <img src={bot.avatar_url} alt={bot.name} className="w-24 h-24 rounded-full my-2 mx-auto bg-gradient-to-r from-pink-300 to-blue-00" />

          <p>Health: {bot.health}</p>
          <p>Damage: {bot.damage}</p>
          <p>Armor: {bot.armor}</p>
          <p>Class: {bot.bot_class}</p>
          <p>Catchphrase: {bot.catchphrase}</p>
          <p>Created At: {new Date(bot.created_at).toLocaleString()}</p>
          <p>Updated At: {new Date(bot.updated_at).toLocaleString()}</p>
          <button
            onClick={() => onReleaseFromArmy(bot.id)}
            className="px-4 py-2 bg-pink-600 text-white font-semibold rounded-full mr-4"
          >
            Release
          </button>
          <button
            onClick={() => onDischarge(bot.id)}
            className="px-4 py-2 mr-4 bg-purple-600 text-white font-semibold rounded-full"
          >
            Discharge
          </button>
        </div>
      ))}
    </div>
  );
};

export default YourBotArmy;
