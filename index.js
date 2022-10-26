const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const courses = require('./data/AllCourses.json');
const detailsCourse = require('./data/CourseDetails.json');

app.get('/', (req, res) => {
    res.send('All Course Here');
});

app.get('/all-courses', (req, res) => {
    res.send(courses);
});

// app.get('/course/:id', (req, res) => {
//     const id = req.params.id;
//     if (id === '08') {
//         res.send(news);
//     }
//     else {
//         const category_news = news.filter(n => n.category_id === id);
//         res.send(category_news);
//     }
// })

// app.get('/news', (req, res) =>{
//     res.send(news);
// });

app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourse = detailsCourse.find(n => n.id === id);
    res.send(selectedCourse);
});

app.listen(port, () => {
    console.log('Computer Science running on port', port);
})