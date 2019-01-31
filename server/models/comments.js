import databaseConnection from './dbConfig';


export default class Comment {
  static async createComment(question, questionTitle, questionBody, comment, createdBy) {
    try {
      const query = 'INSERT INTO comments(question, title, body, "createdBy", comment) VALUES($1, $2, $3, $4, $5) RETURNING question, title, body, comment';
      const value = [question, questionTitle, questionBody, createdBy, comment];
      const response = await databaseConnection.query(query, value);
      return response;
    }
    catch (err) {
      return err;
    }
  }

  static async getComments(questionid) {
    try {
      const query = 'SELECT * FROM comments WHERE question = $1 ORDER BY id DESC';
      const value = [questionid];
      const response = await databaseConnection.query(query, value);
      return response;
    }
    catch (err) {
      console.log(err);
      return err;
    }
  }
}
