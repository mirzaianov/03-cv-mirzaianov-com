const Course = ({ courseName, resource, author, href }) => {
  return (
    <li className="list-0">
      <a
        className="link"
        href={href}
        target="_blank"
      >
        <p className="p-700 course__name">{courseName}</p>
      </a>
      <div className="course__info">
        <p>{resource}</p>
        <p>•</p>
        <p>{author}</p>
      </div>
    </li>
  );
};

export default Course;
