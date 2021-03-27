export default {
  defaultApi: 'https://opentdb.com/api.php?type=multiple',
  isStart: false,
  isFinished: false,
  currentAmount: 10,
  selectedCategory: null,
  questionNumber: null,
  difficulty: null,
  questions: [],
  answers: [],
  categories: [
    { value: null, text: 'Random' },
    { value: '&category=9', text: 'General Knowledge' },
    { value: '&category=10', text: 'Entertainment: Books' },
    { value: '&category=11', text: 'Entertainment: Film' },
    { value: '&category=12', text: 'Entertainment: Music' },
    { value: '&category=13', text: 'Entertainment: Musicals & Theatres' },
    { value: '&category=14', text: 'Entertainment: Television' },
    { value: '&category=15', text: 'Entertainment: Video Games' },
    { value: '&category=16', text: 'Entertainment: Board Games' },
    { value: '&category=17', text: 'Science & Nature' },
    { value: '&category=18', text: 'Science: Computers' },
    { value: '&category=19', text: 'Science: Mathematics' },
    { value: '&category=20', text: 'Mythology' },
    { value: '&category=21', text: 'Sports' },
    { value: '&category=22', text: 'Geography' },
    { value: '&category=23', text: 'History' },
    { value: '&category=24', text: 'Politics' },
    { value: '&category=25', text: 'Art' },
    { value: '&category=26', text: 'Celebrities' },
    { value: '&category=27', text: 'Animals' },
    { value: '&category=28', text: 'Vehicles' },
    { value: '&category=29', text: 'Entertainment: Comics' },
    { value: '&category=30', text: 'Science : Gadgets' },
    { value: '&category=31', text: 'Entertainment: Japanese Anime & Manga' },
    { value: '&category=32', text: 'Entertainment: Cartoon & Animations' }
  ]
}
