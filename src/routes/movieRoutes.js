const express = require('express');
const TrendingMovies = require('../models/TrendingMovies');

const router = express.Router();

router.post('/trending', async (req, res) => {
  const { name, posterUrl, movieId } = req.body;

  if (!name || !movieId || !posterUrl) {
    return res.status(400).json({ error: 'Missing required movie fields' });
  }

  try {
    await TrendingMovies.findOneAndUpdate(
      { name },                // filter
      {
        $set: { posterUrl, movieId },
        $inc: { count: 1 },
      },
      {
        upsert: true,
        new: true,
      }
    );

    res.status(200).json({ message: 'Trending movie updated' });
  } catch (error) {
    console.error('🔥 MongoDB error:', error.message);
    res.status(500).json({ error: error.message });
  }
});


router.get('/trending',async(req,res)=>{
  try{
    const trendingMovies = await TrendingMovies.find()
      .sort({ count: -1 })
      .limit(10);

    res.status(200).json({ results: trendingMovies });
  }catch(error){
    console.error(error.message);
     res.status(500).json({ error: error.message });
  }
})

module.exports = router;
