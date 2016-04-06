var threshold = 50;
var norm = {ok:"Normal", high:"Elevated", low:"Low"}
exports.update = function(req, res, next){
    var sensorID = req.params.sid;
    var sensorVal = req.params.val;
    var date = new Date();
    var st = Number(sensorVal) < threshold ? norm.ok : norm.high;
    res.send({sid: sensorID, date: date, status: st, msg: "Accepted"});
}

exports.getNorm = function(){
    return Number(threshold);
}

exports.getNormObject = function(){
    return norm;
}