<script>
// == Teachers' Standards == //

// -- Documentation -- //
/*
  {
    number : << STANDARD NUMBER >>,
    type : << STANDARD TYPE e.g. Teaching | Conduct >>,
    name : << STANDARD NAME >>,
    details : << STANDARD DETAILS | DESCRIPTION >>,
    colour : << STANDARD BASE COLOUR e.g. #dfcce6 >>,
    comment : << WHETHER A COMMENT BOX IS INCLUDED >>,
    evidence : << WHETHER AN EVIDENCE SELECTOR IS --> IMPLIES comment = true >>
    toggle : << WHETHER AN SLIDE TOGGLE IS INCLUDED | OVERRRIDES NON-HIDDEN CHILDREN, COMMENTS & EVIDENCE >>,
    hide : << WHETHER THE STANDARD IS HIDDEN >>,
	critera: [{
        name: << CRITERIA NAME >>,
        value: << CRITERIA VALUE >>,
        details: << CRITERIA DETAILS | DESCRIPTION >>,
	},],
    children: [{
        << AS ABOVE >>,
	},],
*/
// -- Documentation -- //

var standards = [

	// -- Standard 1 -- //
	{
		number: 1,
		type: "Teaching",
		name: "Expectations",
		details: "Set high expectations which inspire, motivate and challenge pupils",
		colour: "#dfcce6",
		comment: true,
        toggle: true,
		critera: [{
			name: "Developing / Met",
			value: 1,
			details: "__Encourage pupils__ to participate and contribute in an __atmosphere conducive to learning__. In the course of differing school experiences they have shown that they have __set appropriately high expectations__, believing that all pupils have the potential to make progress. Able to develop a rapport with a range of individuals and groups.  As a consequence of this most pupils are __engaged in their learning__. Consistently demonstrate professional behaviour, respect for pupils, colleagues, parents and carers and support the ethos of the school. Demonstrate enthusiasm for working with children and young people and for teaching and learning.",
		}, {
			name: "Secure",
			value: 2,
			details: "Reliably __encourage pupils__ to participate and contribute in an atmosphere conducive to learning. Consistently set high expectations of pupils in their different training contexts. __Well respected by learners__ and effectively promote pupilsÃ¢ÂÂ resilience, confidence and independence when tackling challenging activities. As a result of this __most learners__ are enthused and motivated to participate.",
		}, {
			name: "Excellent",
			value: 3,
			details: "__Constantly encourage__ pupils to participate and contribute in an atmosphere highly conducive to learning.  Consistently set high expectations of pupils in different training contexts. There are high levels of mutual respect between the teacher and pupils.  Very effective in promoting learnersÃ¢ÂÂ resilience, confidence and independence when tackling challenging activities. Generate high levels of enthusiasm, participation and commitment to learning.",
		}],
		children: [{
			number: 1,
			details: "Establish a safe and stimulating environment for pupils, rooted in mutual respect.",
		}, {
			number: 2,
			details: "Set goals that stretch and challenge pupils of all backgrounds, abilities and dispositions.",
		}, {
			number: 3,
			details: "Demonstrate consistently the positive attitudes, values and behaviour which are expected of pupils.",
		}, ]
	},
	// -- Standard 1 -- //


	// -- Standard 2 -- //
	{
		number: 2,
		type: "Teaching",
		name: "Outcomes",
		details: "Promote good progress and outcomes by pupils",
		colour: "#d0e1dc",
		comment: true,
        toggle: true,
		critera: [{
			name: "Developing / Met",
			value: 1,
			details: "__Accountable__ for the __attainment__, __progress__ and __outcomes__ of pupils and take some responsibility for this.  Short- and medium-term planning and teaching demonstrate some understanding of, and provision for, pupil progression taking into account prior achievement. Support pupils in reflecting on their learning and identifying their progress and emerging learning needs. When planning lessons, devise __suitable opportunities__ for learners to evaluate and improve their performance. Able to explain how effective teaching strategies are informed by an understanding of how pupils learn and offer a rationale for choices made in the context of practice.  Plan teaching and learning activities that encourage independent and autonomous learning.  As a consequence all groups of pupils make at least __satisfactory progress__."
		}, {
			name: "Secure",
			value: 2,
			details: "__Assume responsibility__ for the attainment, progress and outcomes of the pupils they teach.  Demonstrate a __sound understanding__ of the need to develop pupil learning over time. Short- and medium-term planning consistently takes into account the prior learning of the pupils. Regularly provide pupils with the opportunity to reflect on their own learning and use this, along with other forms of assessment, to inform their future planning and teaching. Use their knowledge of __effective teaching strategies__ to encourage independent learning, and set appropriately challenging tasks that enable the learners to make progress. As a result the majority of pupils make __good progress__."
		}, {
			name: "Excellent",
			value: 3,
			details: "Assume a __high level of responsibility__ for the attainment progress and outcomes of the pupils they teach. Demonstrate confident judgement in planning for pupil progression both within individual lessons and over time and able to articulate a clear and well-justified rationale as to how they are building on prior achievement. Actively promote __engaging and effective methods__ that support pupils in reflecting on their learning. Able to set __appropriately challenging tasks__, drawing on a sound knowledge of the pupilsÃ¢ÂÂ prior attainment, which has been obtained through __systematic and accurate assessment__. Regularly create opportunities for independent and autonomous learning. As a result the __majority__ of pupils make __very good progress__."
		}],
		children: [{
			number: 1,
			details: "Be accountable for pupilsÃ¢ÂÂ attainment, progress and outcomes.",
		}, {
			number: 2,
			details: "Be aware of pupilsÃ¢ÂÂ capabilities and their prior knowledge, and plan teaching to build on these.",
		}, {
			number: 3,
			details: "Guide pupils to reflect on the progress they have made and their emerging needs.",
		}, {
			number: 4,
			details: "Demonstrate knowledge and understanding of how pupils learn and how this impacts on teaching.",
		}, {
			number: 5,
			details: "Encourage pupils to take a responsible and conscientious attitude to their own work and study.",
		}, ]
	},
	// -- Standard 2 -- //


	// -- Standard 3 -- //
	{
		number: 3,
		type: "Teaching",
		name: "Subject Knowledge",
		details: "Demonstrate good subject and curriculum knowledge",
		colour: "#d3d9de",
		comment: true,
        toggle: true,
		critera: [{
			name: "Developing / Met",
			value: 1,
			details: "__Sufficiently secure knowledge__ and understanding of the relevant subject/curriculum areas to teach effectively in the age phase for which they are training to teach. Understand how learning progresses within and across the subject/curriculum age phases they are training to teach, in relation to the development of key concepts and of learnersÃ¢ÂÂ common misconceptions. Able to __respond appropriately to subject-specific questions__ learners ask and they use subject-specific language accurately and consistently in order to help learners develop knowledge, understanding and skills in the subject. Recognise the need to extend and update their subject and pedagogical knowledge as a key element of continuing professional development and have shown ability and readiness to do so.  Demonstrate an understanding of the need to promote high standards of communication, reading and writing for all learners and begin to build this into lessons."
		}, {
			name: "Secure",
			value: 2,
			details: "__Well-developed knowledge__ and __understanding__ of the relevant subject/curriculum areas they are training to teach and use this effectively to maintain and develop pupilsÃ¢ÂÂ interest.  Make good use of their __secure curriculum and pedagogical subject knowledge__ to deepen learnersÃ¢ÂÂ knowledge and understanding, addressing common errors and misconceptions effectively in their teaching.  Critically aware of the need to extend and update their subject, curriculum and pedagogical knowledge and know how to employ appropriate professional development strategies to further develop these in their career. Good standards of written and spoken communication in all professional activities and encourage and support learners to develop these skills in lessons."
		}, {
			name: "Excellent",
			value: 3,
			details: "__In-depth subject__ and __curriculum knowledge__ to plan confidently for progression and to stimulate and capture pupilsÃ¢ÂÂ interest.  Demonstrate very well-developed pedagogical subject knowledge, by anticipating common errors and misconceptions in planning.  __Astutely aware__ of personal development needs in relation to extending and updating subject, curriculum and pedagogical knowledge in their career and have been proactive in developing these effectively. __Very high standards of written and spoken communication__ in all professional activities. Successfully identify and exploit opportunities to develop learnersÃ¢ÂÂ skills, in communication, reading and writing."
		}],
		children: [{
			number: 1,
			details: "Have a secure knowledge of the relevant subject(s) and curriculum areas, foster and maintain pupilsÃ¢ÂÂ interest in the subject, and address misunderstandings.",
		}, {
			number: 2,
			details: "Demonstrate a critical understanding of developments in the subject and curriculum areas, and promote the value of scholarship.",
		}, {
			number: 3,
			details: "Demonstrate an understanding of and take responsibility for promoting high standards of literacy, articulacy and the correct use of standard English, whatever the teacherÃ¢ÂÂs specialist subject.",
		}, {
			number: 4,
			details: "If teaching early reading, demonstrate a clear understanding of systematic synthetic phonics.",
		}, {
			number: 5,
			details: "If teaching early mathematics, demonstrate a clear understanding of appropriate teaching strategies.",
		}, ]
	},
	// -- Standard 3 -- //


	// -- Standard 4 -- //
	{
		number: 4,
		type: "Teaching",
		name: "Planning",
		details: "Plan and teach well structured lessons",
		colour: "#e8f2d0",
		comment: true,
        toggle: true,
		critera: [{
			name: "Developing / Met",
			value: 1,
			details: "Employ a __range of teaching strategies__ and resources. Plan individual lessons that are appropriately structured to support pupils in developing their knowledge, skills, understanding, interest and positive attitudes.  Maintain the pace of the learning during and teaching, able to respond flexibly to what is happening in the classroom and have confidence to adapt teaching in order to respond to the needs of the learners.  Create an environment in which the learners are __usually engaged__. Understand how homework or other out-of-class work can sustain learnersÃ¢ÂÂ progress and __consolidate learning__, and can design and set __appropriate tasks__. Review and reflect on their own planning and teaching to prepare future activities and tasks that build on and sustain progression in pupilsÃ¢ÂÂ learning. Work collaboratively with colleagues, where appropriate, to adapt and/or develop the schoolÃ¢ÂÂs medium-term plans, schemes of work and curriculum frameworks."
		}, {
			name: "Secure",
			value: 2,
			details: "__Willingness to try out__ a range of approaches to teaching and learning. Plan lessons that take account of the __needs__ of groups of learners and individuals, through the setting of __differentiated learning outcomes__, carefully matching teaching and learning activities and resources to support learners in achieving these intended learning outcomes. Know how to learn from both successful and less effective lessons through their __systematic evaluation__ of the effectiveness of practice, including its impact on learners. Make a __positive contribution__ to the development of curriculum and resources in their department/team."
		}, {
			name: "Excellent",
			value: 3,
			details: "Plan lessons that often use __well-chosen__, __imaginative__ and __creative__ strategies, and that match individualsÃ¢ÂÂ needs and interests. __Highly reflective__ in critically evaluating their practice. __Accurately judge__ the impact of their practice on individual and groups of learners and can use __evaluation__ to inform future planning, teaching and learning. __Contribute to__ and __lead curriculum planning__ and developing and producing effective learning resources in their department/team."
		}],
		children: [{
			number: 1,
			details: "Impart knowledge and develop understanding through effective use of lesson time.",
		}, {
			number: 2,
			details: "Promote a love of learning and childrenÃ¢ÂÂs intellectual curiosity.",
		}, {
			number: 3,
			details: "Set homework and plan other out-of-class activities to consolidate and extend the knowledge and understanding pupils have acquired.",
		}, {
			number: 4,
			details: "Reflect systematically on the effectiveness of lessons and approaches to teaching.",
		}, {
			number: 5,
			details: "Contribute to the design and provision of an engaging curriculum within the relevant subject area(s).",
		}, ]
	},
	// -- Standard 4 -- //


	// -- Standard 5 -- //
	{
		number: 5,
		type: "Teaching",
		name: "Differentiation",
		details: "Adapt teaching to respond to the strengths and needs of all pupils",
		colour: "#fcd0de",
		comment: true,
        toggle: true,
		critera: [{
			name: "Developing / Met",
			value: 1,
			details: "Know the pupils well enough to __recognise the different needs__ and strengths of individuals and groups and begin to __adapt teaching__ to address those needs and strengths so that learners are supported towards achieving their potential. Aware of a range of factors that are __potential barriers to achievement__ and understand how colleagues use a range of strategies to reduce these barriers.  Begin to deploy these strategies themselves, working alongside other colleagues and support staff as appropriate. Show __awareness__ of how children and young people develop and take account of this in teaching. Some understanding of the challenges and opportunities of teaching in a diverse society. __Developing understanding__ of the needs of all pupils and are able to articulate distinctive teaching approaches and strategies needed to engage and support pupils with particular needs, including EAL and SEND. When the opportunity arises use these successfully and evaluate the impact of the adaptations employed, on the progress of individual learners."
		}, {
			name: "Secure",
			value: 2,
			details: "__Consistently adapt__ their teaching to meet the needs of individual and groups of learners to support progression in learning. Secure progress for learners and identify when groups and individuals have made progress. Demonstrate a range of __effective strategies__ that they can apply to __reduce barriers__ and respond to the strengths and needs of pupils. Clearly recognise how to deal with any potential barriers to learning through their application of __well-targeted interventions__ and the appropriate deployment of available support staff."
		}, {
			name: "Excellent",
			value: 3,
			details: "__Quickly__ and __accurately discern__ learnersÃ¢ÂÂ strengths and needs, __proactively differentiating__ and employing a range of effective intervention strategies to secure progression for individuals and groups. __Astute understanding__ of how effective different teaching approaches are in relation to impact on learning and engagement of learners."
		}],
		children: [{
			number: 1,
			details: "Know when and how to differentiate appropriately, using approaches which enable pupils to be taught effectively.",
		}, {
			number: 2,
			details: "Have a secure understanding of how a range of factors can inhibit pupilsÃ¢ÂÂ ability to learn, and how best to overcome these.",
		}, {
			number: 3,
			details: "Demonstrate an awareness of the physical, social and intellectual development of children, and know how to adapt teaching to support pupilsÃ¢ÂÂ education at different stages of development.",
		}, {
			number: 4,
			details: "Have a clear understanding of the needs of all pupils, including those with special educational needs; those of high ability; those with English as an additional language; those with disabilities; and be able to use and evaluate distinctive teaching approaches to engage and support them.",
		}, ]
	},
	// -- Standard 5 -- //


	// -- Standard 6 -- //
	{
		number: 6,
		type: "Teaching",
		name: "Assessment",
		details: "Make accurate and productive use of assessment",
		colour: "#feead4",
		comment: true,
        toggle: true,
		critera: [{
			name: "Developing / Met",
			value: 1,
			details: "__Secure understanding__ of the __statutory assessment requirements__ for the subject/curriculum. Able to make __broadly accurate assessments__ against national benchmarks. Planning is characterised by the use of a range of __formative__ and __summative__ assessment strategies, designed to support pupils in making progress. Deploy these strategies effectively in lessons, both to evaluate the impact of teaching on the progress of learners and as a basis for modifying teaching and classroom practice when necessary.  Understand how school- and pupil-level summative data are used to set targets for groups and individuals, and use that knowledge to __monitor progress__. Monitor pupil progress and maintain accurate records, setting new targets for individuals and groups. __Mark__ pupilsÃ¢ÂÂ work __constructively__ and provide __appropriate oral feedback__ to pupils to help them to make progress."
		}, {
			name: "Secure",
			value: 2,
			details: "Able to __assess__ pupilsÃ¢ÂÂ attainment __accurately__ against national benchmarks. Employ a range of appropriate formative assessment strategies effectively and adapt teaching within lessons in light of pupilsÃ¢ÂÂ responses.  Maintain accurate records of pupilsÃ¢ÂÂ progress and use these to set appropriately challenging targets. Assess learnersÃ¢ÂÂ progress __regularly__ and accurately whilst __discussing assessments__ with them so that learners know how well they have done and what they need to do to improve."
		}, {
			name: "Excellent",
			value: 3,
			details: "__Confidently__ and __accurately__ assess pupilsÃ¢ÂÂ attainment against national benchmarks.  Use a range of assessment strategies __very effectively__ in day-to-day practice to monitor progress and to inform future planning.  Systematically and effectively check learnersÃ¢ÂÂ understanding throughout lessons, __anticipating where intervention__ may be needed and do so with __otable impact__ on the __quality of learning__.  Assess learnersÃ¢ÂÂ progress regularly and work with them to accurately target further improvement and __secure rapid progress__."
		}],
		children: [{
			number: 1,
			details: "Know and understand how to assess the relevant subject and curriculum areas, including statutory assessment requirements.",
		}, {
			number: 2,
			details: "Make use of formative and summative assessment to secure pupilsÃ¢ÂÂ progress.",
		}, {
			number: 3,
			details: "Use relevant data to monitor progress, set targets, and plan subsequent lessons.",
		}, {
			number: 4,
			details: "Give pupils regular feedback, both orally and through accurate marking, and encourage pupils to respond to the feedback.",
		}, ]
	},
	// -- Standard 6 -- //


	// -- Standard 7 -- //
	{
		number: 7,
		type: "Teaching",
		name: "Behaviour Management",
		details: "Manage behaviour effectively to ensure a good and safe learning environment",
		colour: "#d4fef2",
		comment: true,
        toggle: true,
		critera: [{
			name: "Developing / Met",
			value: 1,
			details: "Understand the schoolÃ¢ÂÂs framework for behaviour and apply rules and routines __consistently__ and __fairly__. Set __high expectations__ and use a range of strategies to promote positive behaviour. Able to apply these appropriately, in the context of the schoolÃ¢ÂÂs policy of using sanctions and rewards, __including praise__, in order to create an environment supportive of learning. Understand when to seek __additional support__ in addressing the needs of pupils when significantly challenging behaviour is demonstrated. Recognise that planning appropriate lessons that challenge learners, teaching using a variety of strategies that address pupilsÃ¢ÂÂ needs and employing appropriate assessment strategies will all contribute to successful behaviour management. Show understanding of how barriers to learning can impact on pupil behaviour and have begun to __apply strategies to address these__, working alongside colleagues and support staff as appropriate. Understand that behaviour management is __context-dependent__ and are able to articulate which factors may contribute to more challenging behaviour being exhibited within their classes."
		}, {
			name: "Secure",
			value: 2,
			details: "Understand the schoolÃ¢ÂÂs framework for behaviour and apply __rules__ and __routines consistently__ and __fairly__.  Consistently set high expectations and understand a range of strategies to promote positive behaviour and apply these effectively, including use of school sanctions and rewards, and use of praise, in order to create an environment supportive of learning.  __Manage behaviour effectively__ so that learners demonstrate positive attitudes towards the teacher, their learning and each other allowing lessons to flow smoothly so that __disruption is unusual__. Actively seek additional support in addressing the needs of pupils when significantly challenging behaviour is demonstrated."
		}, {
			name: "Excellent",
			value: 3,
			details: "__Rapidly adapt__ to the different circumstances in which they train, __working confidently__ within the frameworks established in different settings and applying rules and routines consistently and fairly.  Consistently have __high expectations__ and understand a range of strategies that colleagues use to promote positive behaviour and apply these very effectively, including use of school sanctions and rewards, and use of praise, in order to create an environment highly supportive of learning. Manage pupil behaviour with ease so that learners display very __high levels of engagement__, __courtesy__, __collaboration__ and __cooperation__. Actively seek additional support in addressing the needs of pupils, when significantly challenging behaviour is demonstrated."
		}],
		children: [{
			number: 1,
			details: "Have clear rules and routines for behaviour in classrooms, and take responsibility for promoting good and courteous behaviour both in classrooms and around the school, in accordance with the schoolÃ¢ÂÂs behaviour policy.",
		}, {
			number: 2,
			details: "Have high expectations of behaviour, and establish a framework for discipline with a range of strategies, using praise, sanctions and rewards consistently and fairly.",
		}, {
			number: 3,
			details: "Manage classes effectively, using approaches which are appropriate to pupilsÃ¢ÂÂ needs in order to involve and motivate them.",
		}, {
			number: 4,
			details: "Maintain good relationships with pupils, exercise appropriate authority, and act decisively when necessary.",
		}, ]
	},
	// -- Standard 7 -- //


	// -- Standard 8 -- //
	{
		number: 8,
		type: "Teaching",
		name: "School Life",
		details: "Fulfil wider professional responsibilities",
		colour: "#c1dae5",
		comment: true,
        toggle: true,
		critera: [{
			name: "Developing / Met",
			value: 1,
			details: "Understand and support the ethos of the school and show an __inclination to contribute__ to the wider life of the school in appropriate ways.  Build effective professional relationships with various colleagues and have the skills required to work collaboratively. __Communicate__ with and direct any support staff deployed in their lessons, to assist in supporting the progress and achievement of individuals and of groups of pupils. Understand when to ask for information and advice from specialist staff about individual pupils with specific needs.  __Seek out__ and be __responsive__ to __advice__ from colleagues. In evaluating personal practice, able to identify subsequent or ongoing personal professional development targets and identify opportunities to address and meet these targets.  Recognise the importance of __communicating with parents__ and carers in supporting pupilsÃ¢ÂÂ achievement and monitoring pupilsÃ¢ÂÂ well-being. Communicate effectively at set points in the school year, including at parentsÃ¢ÂÂ evenings and through __written reports__. Understand the need to communicate at other points in response to individual pupilsÃ¢ÂÂ emergent needs."
		}, {
			name: "Secure",
			value: 2,
			details: "__Proactive__ in seeking out opportunities to contribute to the wider life and ethos of the school. __Effective__ in building __good professional relationships__ with colleagues and demonstrate the ability to work well collaboratively when required to do so. Take responsibility for deploying support staff in lessons (if appropriate) and for seek advice from relevant professionals in relation to pupils with individual needs. Proactively develop professional learning and value the feedback received from more colleagues, using it to __develop teaching further__. Communicate __effectively__, both verbally and in writing, with parents and carers in relation to pupilsÃ¢ÂÂ achievements and well-being. Assume some responsibility for doing so in response to individual pupilsÃ¢ÂÂ emergent needs."
		}, {
			name: "Excellent",
			value: 3,
			details: "Proactive in seeking out opportunities to contribute in a significant way to the wider life and ethos of the school. Build __strong__ professional relationships and able to work collaboratively with colleagues on a __regular basis__. Take __responsibility__ for deploying support staff in their lessons and for seeking advice from relevant professionals in relation to pupils with individual needs. __Deliberately seek out opportunities__ to develop their own professional learning and __respond positively__ to all the feedback received. Communicate __very effectively__, both verbally and in writing, with parents and carers in relation to pupilsÃ¢ÂÂ achievements and well-being when required to do so formally, but also proactively in communicating in relation to individual pupilsÃ¢ÂÂ emergent needs."
		}],
		children: [{
			number: 1,
			details: "Make a positive contribution to the wider life and ethos of the school.",
		}, {
			number: 2,
			details: "Develop effective professional relationships with colleagues, knowing how and when to draw on advice and specialist support.",
		}, {
			number: 3,
			details: "Deploy support staff effectively.",
		}, {
			number: 4,
			details: "Take responsibility for improving teaching through appropriate professional development, responding to advice and feedback from colleagues.",
		}, {
			number: 5,
			details: "Communicate effectively with parents with regard to pupilsÃ¢ÂÂ achievements and well-being.",
		}, ]
	},
	// -- Standard 8 -- //


	// -- Standard 9 -- //
	{
		number: 9,
		type: "Conduct",
		name: "Conduct",
		details: "Personal and professional conduct",
		colour: "#dfdfdf",
        toggle: true,
        comment: true,
		critera: [{
			name: "Met",
			value: 1,
			details: "__Commitment__ to the teaching profession, able to __develop appropriate professional relationships__ with colleagues and pupils. Have regard to the need to __safeguard pupilsÃ¢ÂÂ well-being__, in accordance with __statutory provisions__. Understand that by law that schools are required to teach a broad and balanced curriculum and are beginning to develop learnersÃ¢ÂÂ wider understanding of social and cultural __diversity__. Willing to assume an appropriate degree of responsibility for the implementation of __workplace policies__ in the different settings. __Adhere__ to school policies and practices, including those for __attendance__ and __punctuality__. Broad understanding of their __statutory professional responsibilities__, including the requirement to promote equal opportunities and to provide reasonable adjustments for pupils with disabilities, as provided for in current equality legislation. Aware of the __professional duties__ of teachers as set out in the statutory School TeachersÃ¢ÂÂ Pay and Conditions document."
		}, ],
		children: [{
			number: 1,
			details: "Teachers uphold public trust in the profession and maintain high standards of ethics and behaviour, within and outside school.",
            children: [{
				number: 1,
				details: "Treating pupils with dignity, building relationships rooted in mutual respect, and at all times observing proper boundaries appropriate to a teacherÃ¢ÂÂs professional position.",
                hide: true,
			}, {
				number: 2,
				details: "Showing tolerance of and respect for the rights of others.",
                hide: true,
			}, {
				number: 3,
				details: "Deploy support staff effectively.",
                hide: true,
			}, {
				number: 4,
				details: "Not undermining fundamental British values, including democracy, the rule of law, individual liberty and mutual respect, and tolerance of those with different faiths and beliefs.",
                hide: true,
			}, {
				number: 5,
				details: "Ensuring that personal beliefs are not expressed in ways which exploit pupilsÃ¢ÂÂ vulnerability or might lead them to break the law.",
                hide: true,
			}, ]
		}, {
			number: 2,
			details: "Teachers must have proper and professional regard for the ethos, policies and practices of the school in which they teach, and maintain high standards in their own attendance and punctuality.",
		}, {
			number: 3,
			details: "Teachers must have an understanding of, and always act within, the statutory frameworks which set out their professional duties and responsibilities.",
		}, ]
	},
	// -- Standard 9 -- //
]

</script>