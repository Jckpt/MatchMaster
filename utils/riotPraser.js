// lookup Map that uses queueId to return the name of the queue
const queueLookup = new Map([
  [400, "Draft Pick"],
  [420, "Ranked Solo"],
  [430, "Blind Pick"],
  [440, "Ranked Flex"],
  [450, "ARAM"],
  [700, "Clash"],
  [830, "Co-op vs AI"],
  [840, "Co-op vs AI"],
  [850, "Co-op vs AI"],
  [900, "URF"],
  [1020, "One for All"],
  [1040, "URF"],
  [1200, "Nexus Blitz"],
  [1300, "Nexus Blitz"],
  [2000, "Tutorial"],
  [2010, "Tutorial"],
  [2020, "Tutorial"],
]);
export const getQueueName = (queueId) => {
  return queueLookup.get(queueId);
};
export const parsedParticipant = (participant) => {
  return {
    role: participant.lane,
    summonerName: participant.summonerName,
    championId: participant.championId,
    championLevel: participant.champLevel,
    team: teamColor(participant.teamId),
    cs: participant.totalMinionsKilled + participant.neutralMinionsKilled,
    damageDealt: participant.totalDamageDealtToChampions,
    damageTaken: participant.totalDamageTaken,
    kda: {
      k: participant.kills,
      d: participant.deaths,
      a: participant.assists,
    },
    finalBuild: {
      items: [
        participant.item0,
        participant.item1,
        participant.item2,
        participant.item3,
        participant.item4,
        participant.item5,
      ],
      trinket: participant.item6,
    },
    build: {
      spells: [participant.summoner1Id, participant.summoner2Id],
      perks: {
        style: participant.perks.styles[0].style,
        subStyle: participant.perks.styles[1].style,
        IDs: [
          participant.perks.styles[0].selections[0].perk,
          participant.perks.styles[0].selections[1].perk,
          participant.perks.styles[0].selections[2].perk,
          participant.perks.styles[0].selections[3].perk,
          participant.perks.styles[1].selections[0].perk,
          participant.perks.styles[1].selections[1].perk,
        ],
        statPerks: {
          defense: participant.perks.statPerks.defense,
          flex: participant.perks.statPerks.flex,
          offense: participant.perks.statPerks.offense,
        },
      },
    },
  };
};
export const teamColor = (teamId) => {
  return teamId === 100 ? "BLUE" : "RED";
};
