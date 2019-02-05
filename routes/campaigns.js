var express = require('express');
var router = express.Router();


router.get('/:campaignId',function(req,res,next){
  res.setHeader('Content-Type', 'application/json');
  res.send(req.params.campaignId);
});

router.get('/', function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  res.send(campaigns);
});

module.exports = router;


const campaigns = [
  {
    "id": "CN201701182",
    "campaignName": "Camp"
  },
  {
    "id": "CN201701188",
    "campaignName": "Snew"
  },
  {
    "id": "CN2017012321",
    "campaignName": "kjasd"
  },
  {
    "id": "CN2017012431",
    "campaignName": "some name"
  },
  {
    "id": "CN2017020638",
    "campaignName": "abc1"
  },
  {
    "id": "CN2017020640",
    "campaignName": "abc2"
  },
  {
    "id": "CN2017020641",
    "campaignName": "abc3"
  },
  {
    "id": "CN2017020642",
    "campaignName": "abc4"
  },
  {
    "id": "CN2017020643",
    "campaignName": "abc5"
  },
  {
    "id": "CN2017020644",
    "campaignName": "abc6"
  }
]
