function Profile(props) {
  return (
    <div className="">
      <h1>{props.fullName} </h1>
      <p>{props.bio} </p>
      <h1> {props.profession} </h1>
      {props.children}
    </div>
  );
}
export default Profile;
