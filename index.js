const robots = [
    { name: "Johnny 5", modes: 5, isActivated: false },
    { name: "C3PO", modes: 3, isActivated: false },
    { name: "Sonny", modes: 2.5, isActivated: false },
    { name: "Baymax", modes: 1.5, isActivated: false },
  ];
  
  const activatedRobots = robots.map((robot) => {
    return Object.assign({}, robot, {
      modes: robot.modes * 2,
      isActivated: true,
    });
  });
  
  console.log(activatedRobots);

  const tutorials = [
    "what does the this keyword mean?",
    "What is the Constructor OO pattern?",
    "implementing Blockchain Web API",
    "The Test Driven Development Workflow",
    "What is NaN and how Can we Check for it",
    "What is the difference between stopPropagation and preventDefault?",
    "Immutable State and Pure Functions",
    "what is the difference between == and ===?",
    "what is the difference between event capturing and bubbling?",
    "what is JSONP?",
  ];

  const tutorialCase = tutorials.map((tutorial)=>{
    return Object.assign({},
        tutorial.charAt(0).toUpperCase() + tutorial.slice(1)
    )
  })

  console.log(tutorialCase);