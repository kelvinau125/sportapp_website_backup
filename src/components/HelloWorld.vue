<template>
  <div class="match-details">
    <img src="@/assets/tournament/footballBackground.png" alt="Match Image" class="match-image" />
    <div class="datetime">
      <p>{{ matchDate }} {{ matchTime }}</p>
      <p v-if="matchStatus === '未开赛'">{{ matchStatus }}</p>
    </div>
    <div>
      
    </div>
    <div class="icons">
      <img src="@/assets/tournament/moneyBadge.png" alt="Money Bag Icon" class="money-bag-icon" />
      <img src="@/assets/tournament/badge_.png" alt="Badge Icon" class="badge-icon" />
    </div>
    <div class="team-details">
      <p class="home-team">{{ footballMatchById.homeTeamName }}</p>
      <p class="score">{{ footballMatchById.homeScore }} - {{ footballMatchById.awayScore }}</p>
      <p class="away-team">{{ footballMatchById.awayTeamName }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      matchDate: '2023-11-21',
      matchTime: '18:00',
      matchStatus: '未开赛',
      footballMatchById: {
        homeTeamName: 'Home Team',
        awayTeamName: 'Away Team',
        homeScore: 0,
        awayScore: 0,
      },
    };
  },
};
</script>

<style scoped>
.match-details {
  position: relative;
  width: 100%;
}

.match-image {
  width: 100%;
}

.datetime {
  position: absolute;
  top: 54px;
  left: 0;
  right: 0;
  text-align: center;
  color: #FFF8FEE4;
  font-size: 12px;
  font-family: 'NotoSansSC';
  font-weight: 400;
  letter-spacing: 0.46px;
}

.datetime p {
  margin: 0;
}

.icons {
  position: absolute;
  top: 76px;
  left: 800px;
  display: flex;
  align-items: center;
}

.money-bag-icon{
  width: 46px;
  height: 46px;
  margin-right: 100px;
}
.badge-icon {
  width: 46px;
  height: 46px;
  margin-left: 110px;
}

.team-details {
  position: absolute;
  top: 122px;
  left: 800px;
  right: 0;
  text-align: center;
  color: #FFFFFF;
  font-size: 14px;
  font-family: 'NotoSansSC';
  font-weight: 400;
  letter-spacing: 0.30px;
  display: flex;
}

.score {
  font-size: 30px;
  font-weight: 600;
  letter-spacing: 0.42px;
}

.home-team,
.away-team {
  margin: 0;
}
</style>

