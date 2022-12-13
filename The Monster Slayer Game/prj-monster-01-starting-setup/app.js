function getRandomValue(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
    data(){
        return{
            monsterHealth: 100,
            playerHealth: 100,
            currentRound: 0,
        };
    },
    computed: {
        monsterBarStyles(){
            return {width: this.monsterHealth + '%'};
        },
        playerBarStyles(){
            return {width: this.playerHealth + '%'};
        },
        mayUseSpecialAttack(){
            return this.currentRound % 3 !== 0;
        }
    },
    watch: {
        /* The name of the watchers should be exactly the same as the properties in the data you want to follow */
        playerHealth(value){
            if (value <= 0 && this.monsterHealth <=0) {
                
            }
        },
        monsterHealth(value){}
    },
    methods: {
        attackMonster(){
            this.currentRound++;
            const attackValue = getRandomValue(5,12);
            this.monsterHealth -= attackValue;
            this.attackPlayer();

            if (this.playerHealth < 0) {
                
            }
        },
        attackPlayer(){
            const attackValue = getRandomValue(8,15);
            this.playerHealth -= attackValue;
        },
        specialAttackMonster(){
            this.currentRound++;
            const attackValue = getRandomValue(10,25);
            this.monsterHealth -= attackValue;
            this.attackPlayer();
        },
        specialAttackPlayer(){
            const attackValue = getRandomValue(10,25);
            this.playerHealth -= attackValue;
        },
        healPlayer(){
            this.currentRound++;
            const healValue = getRandomValue(8,20);

            if (this.playerHealth + healValue > 100) {
                this.playerHealth = 100;
            }else{
                this.playerHealth += healValue;
            }

            this.attackPlayer();
        }
    }
});

app.mount('#game');