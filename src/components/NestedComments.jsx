import "../styles/nestedComments.css";

const CommentBox = ({ data }) => {
  return data.map((item, index) => {
    return (
      <div className="commentBox" key={index}>
        <img
          style={{ width: "15px", height: "15px" }}
          src="https://cdn-icons-png.flaticon.com/512/9187/9187604.png"
          alt=""
        />
        <div className="ls">
          <h1>{item.userName}</h1>
          <h2>{item.comment}</h2>
          {item?.replies && <CommentBox data={item.replies} />}
        </div>
      </div>
    );
  });
};

const data = [
  {
    userName: "Devansh",
    comment: "1",
    replies: [
      {
        userName: "A",
        comment: "1A",
        replies: [
          {
            userName: "AA",
            comment: "1AA",
            replies: [
              {
                userName: "AAA",
                comment: "1AAA",
                replies: [
                  {
                    userName: "AAAA",
                    comment: "1AAAA",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    userName: "Kartik",
    comment: "2",
    replies: [
      {
        userName: "B",
        comment: "1B",
        replies: [
          {
            userName: "BB",
            comment: "1BB",
            replies: [
              {
                userName: "BBB",
                comment: "1BBB",
                replies: [
                  {
                    userName: "BBBB",
                    comment: "1BBBB",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

const NestedCommentsContainer = () => {
  return (
    <div className="nestedComments">
      <h1> Nested Comments</h1>
      <CommentBox data={data} />
    </div>
  );
};

export default function NestedComments() {
  return <NestedCommentsContainer />;
}
