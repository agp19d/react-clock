function Clock() {
    const [date, setDate] = React.useState(new Date());
  
    React.useEffect(() => {
      const timer = setInterval(() => {
        setDate(new Date());
      }, 500);
  
      return () => {
        clearInterval(timer);
      };
    }, []);
  
    // Define your styles here
    const styles = {
      container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#282c34',
        color: 'white',
        fontSize: '2em',
      },
      heading: {
        marginBottom: '0.5em',
      },
    };
  
    return (
      <div style={styles.container}>
        <h1 style={styles.heading}>Hello, world!</h1>
        <h2>It is {date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<Clock />);
  
