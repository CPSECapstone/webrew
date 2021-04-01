## GraphQL endpoints

```
https://bz4ubl4t4e.execute-api.us-east-1.amazonaws.com/dev/graphql
```

## APIs

-  Add Quiz
-  Get Quiz By Quiz Id
-  List Quiz Submissions By Quiz Id
-  Get Quiz Submission By Submission Id
-  Submit Quiz

### Examples

```
mutation {
  addQuiz(
    quiz: {
      course: "History"
      name: "A Game of Thrones"
      instructions: "Long ago, in a time forgotten, a preternatural event threw the seasons out of balance"
      totalPoints: 100
    }
  ) {
    id
    course
    name
    totalPoints
  }
}

query GetQuizById {
  quiz(id: "e589e36fb7d") {
    id
    course
  	name
    instructions
    totalPoints
  }
}
```

### QuizSubmissions

```
query ListQuizSubmissionsByQuizId {
  quizSubmissions(quizId: "8989d1faaef") {
    id
    student
    points
  }
}

query GetQuizSubmissionById {
  quizSubmission(id: "a9c8e50acae") {
    id
    student
    points
  }
}

mutation {
  submitQuiz(submission: {
    student: "Robb Stark"
    quiz: "8989d1faaef"
    choices:[]
  }) {
    student
    quiz {
      name
      totalPoints
    }
    points
  }
}
```
