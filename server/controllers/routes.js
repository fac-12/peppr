const express = require('express');
const router = require('express').Router();
const urlScraper = require('./url-scraper/urlScraper');

router.post('/urlscraper', urlScraper);

module.exports = router ;
