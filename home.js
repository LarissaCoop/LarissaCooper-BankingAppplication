function Home() {
  return (
    <Card
      header="BadBank Home Page"
      title="Welcome to the very bad bank"
      text="You can move around using the navigation bar."

            
      body={
        <>
          <div 
          id="homephotdiv"
          className="container" style={{ maxWidth: "300px" }}>
            <p><strong>Enter at your own risk! </strong></p>
            <img
              src="badBankImg.jpg"
              className="img-fluid"
              alt="Responsive image"
            />
          </div>
        </>
      }
    />
  );
}
