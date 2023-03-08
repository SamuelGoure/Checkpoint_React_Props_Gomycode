function Profile(props) {
  return (
    <div>
      <h1>Je suis un composant de fonction</h1>
      <h1>{props.fullName} </h1>
      <h1>{props.bio} </h1>
    </div>
  );
}
export default Profile;
