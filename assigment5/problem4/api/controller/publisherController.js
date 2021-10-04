const mongoose= require("mongoose");
const Game= mongoose.model("Game");
const addPublisher= function(req, res) {
const gameId= req.params.gameId;
Game.findById(gameId).select("publisher").exec(function(err, game) {
    if(err){
        res.status(500).json({message:'error adding publisher'})
    } else {
       game.pu
    }
res.status(200).json(doc.reviews);
});
}
module.exports.reviewGetOne= function(req, res) {