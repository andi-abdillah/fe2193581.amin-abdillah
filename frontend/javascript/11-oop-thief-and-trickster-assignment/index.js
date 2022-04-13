const Player = require("../11-oop-steal-gold-cp/index");

class Thief extends Player {
  constructor(name) {
    super(name);
    this.job = "Thief";
  }
  
  robbedBlind() {
    // TODO: answer here
    if(this.getGold()<10){
      return "Aku terlalu miskin";
    }else{
      this.setGold(this.getGold()-10);
      this.setStealChance(0.75);
    }
  }

  steal(player) {
    // TODO: answer here
    if(player.job === "Trickster"){
      if(player.getGold() < 5){
        return "Lawan terlalu miskin";
      }else{
        if(this.randomizer() <= this.getStealChance()){
          player.setGold(player.getGold() - 5);
          this.setGold(this.getGold() + 5);
          return player.distractionPurse(this);
        }else{
          return "Gagal mencuri, coba lain kali";
        }
      }
    }else{
      if(player.getGold() < 5){
        return "Lawan terlalu miskin";
      }else{
        if(this.randomizer() <= this.getStealChance()){
          player.setGold(player.getGold() - 5);
          this.setGold(this.getGold() + 5);
          return "Berhasil mencuri 5 gold";
        }else{
          return "Gagal mencuri, coba lain kali";
        }
      }
    }
  }
}

class Trickster extends Player {
  constructor(name) {
    super(name);
    this.distractionPurseChance = 0.25;
    this.job = "Trickster";
  }

  setDistractionPurseChance(chance) {
    // TODO: answer here
    this.distractionPurseChance = chance;
  }

  getDistractionPurseChance() {
    // TODO: answer here
    return this.distractionPurseChance;
  }

  distractionPurse(player) {
    const rng = this.randomizer();
    // TODO: answer here
    if(player.gold < 10 && rng < this.distractionPurseChance){
      this.gold += player.gold;
      player.gold = 0;
      return "Berhasil mencuri balik semua uang lawan";
    }else{
      if(rng < this.distractionPurseChance){
        this.gold += 10;
        player.gold -= 10;
        return "Berhasil mencuri balik 10 gold";
      }else{
        return "Gagal mencuri balik";
      }
    }
  }

  steal(player) {
    // TODO: answer here
  }
}

const p1 = new Thief("hehe");
const p2 = new Trickster("kek");

p1.setStealChance(1);
p1.setGold(4);
p2.setDistractionPurseChance(1);
console.log(p1.getGold());
console.log(p2.getGold());
const message = p1.steal(p2);
console.log(p1.getGold());
console.log(p2.getGold());
console.log(message);

// Dilarang menghapus code dibawah ini!!!
module.exports = {
  Thief,
  Trickster,
};
