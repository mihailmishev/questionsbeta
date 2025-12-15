const questions = [
 {"q":"Which process determines the risks that might affect the project?","options":["Perform Qualitative Risk Analysis","Identify Risks","Plan Risk Management","Perform Quantitative Risk Analysis"],"answer":"Identify Risks"},
  {"q":"In the Plan Stakeholder Management process, expert judgment is used to:","options":["Provide information needed to plan appropriate ways to engage project stakeholders.","Ensure comprehensive identification and listing of new stakeholders.","Analyze the information needed to develop the project scope statement.","Decide the level of engagement of the stakeholders at each required stage."],"answer":"Decide the level of engagement of the stakeholders at each required stage."},
  {"q":"Plan Risk Management is the process of defining how to:","options":["Communicate identified risks to the project stakeholders.","Conduct risk management activities for a project.","Analyze the impact a specific risk may have on the project.","Address unexpected risks that may occur during a project."],"answer":"Conduct risk management activities for a project."},
  {"q":"Which of the following forecasting methods uses historical data as the basis for estimating future outcomes?","options":["Time series","Judgmental","Econometric","Simulation"],"answer":"Time series"},
  {"q":"Which process is included in the Project Integration Management Knowledge Area?","options":["Manage Project Team","Collect Requirements","Sequence Activities","Direct and Manage Project Work"],"answer":"Direct and Manage Project Work"},
  {"q":"Every project creates a unique product, service, or result that may be:","options":["tangible","targeted","organized","variable"],"answer":"tangible"},
  {"q":"Which of the following is an example of a risk symptom?","options":["Failure to meet intermediate milestones","Force of nature, such as a flood","Risk threshold target","Crashing, front loading, or fast tracking"],"answer":"Failure to meet intermediate milestones"},
  {"q":"A project can be defined as a:","options":["Temporary endeavor undertaken to create a unique product, service, or result","Temporary endeavor that produces repetitive outputs","Permanent endeavor undertaken to create a unique product, service, or result","Permanent endeavor that produces repetitive outputs"],"answer":"Temporary endeavor undertaken to create a unique product, service, or result"},
  {"q":"Which is the document that presents a hierarchical project organization?","options":["WBS","CPI","OBS","BOM"],"answer":"OBS"},
  {"q":"Project managers who lead by example and follow through on the commitments they make demonstrate the key interpersonal skill of:","options":["influencing","leadership","motivation","coaching"],"answer":"influencing"},
  {"q":"The project governance approach should be described in the:","options":["change control plan","project scope","statement of work","project management plan"],"answer":"project management plan"},
  {"q":"Which process includes prioritizing risks for subsequent further analysis or action by assessing and combining their probability of occurrence and impact?","options":["Perform Qualitative Risk Analysis","Perform Quantitative Risk Analysis","Plan Risk Management","Plan Risk Responses"],"answer":"Perform Qualitative Risk Analysis"},
  {"q":"A tool and technique used during the Define Scope process is:","options":["facilitated workshops.","observations.","questionnaires and surveys.","group creativity techniques."],"answer":"facilitated workshops."},
  {"q":"Which type of managers do composite organizations involve?","options":["Functional managers and manager of project managers","Functional managers only","Project managers only","Technical managers and project managers"],"answer":"Functional managers and manager of project managers"},
  {"q":"What name(s) is (are) associated with the Plan-Do-Check-Act cycle?","options":["Pareto","Ishikawa","Shewhart-Deming","Delphi"],"answer":"Shewhart-Deming"},
  {"q":"Which of the following strategies is used to deal with risks that may have a negative impact on project objectives?","options":["Exploit","Share","Enhance","Transfer"],"answer":"Transfer"},
  {"q":"A primary function of a project management office is to support project managers in a variety of ways, including which of the following?","options":["Developing and managing project policies, procedures, templates, and other shared documentation","Acting as the project sponsor by providing financial resources to the project","Resolving issues and change management within a shared governance structure","Aligning organizational/strategic direction that affects project and program goals"],"answer":"Developing and managing project policies, procedures, templates, and other shared documentation"},
  {"q":"Who selects the appropriate processes for a project?","options":["Project stakeholders","Project sponsor and project stakeholder","Project manager and project team","Project manager and project sponsor"],"answer":"Project manager and project team"},
  {"q":"Which of the following is an input to the Qualitative Risk Analysis process?","options":["Risk register","Risk data quality assessment","Risk categorization","Risk urgency"],"answer":"Risk register"},
  {"q":"Skills necessary for project management such as motivating to provide encouragement; listening actively; persuading a team to perform an action; and summarizing, recapping, and identifying next steps are known as:","options":["organizational skills","technical skills","communication skills","hard skills"],"answer":"communication skills"},
  {"q":"The Identify Stakeholders process is found in which Process Group?","options":["Initiating","Monitoring and Controlling","Planning","Executing"],"answer":"Initiating"},
  {"q":"The component of the human resource management plan that includes ways in which team members can obtain certifications that support their ability to benefit the project is known as:","options":["recognition and rewards","compliance","staff acquisition","training needs"],"answer":"training needs"},
  {"q":"What tool and technique is used to determine whether work and deliverables meet requirements and product acceptance criteria?","options":["Decomposition","Benchmarking","Inspection","Checklist analysis"],"answer":"Inspection"},
  {"q":"In which process is a project manager identified and given the authority to apply resources to project activities?","options":["Acquire Project Team","Develop Project Management Plan","Manage Project Execution","Develop Project Charter"],"answer":"Develop Project Charter"},
  {"q":"Project contracts generally fall into which of the following three broad categories?","options":["Fixed-price, cost reimbursable, time and materials","Make-or-buy, margin analysis, fixed-price","Time and materials, fixed-price, margin analysis","Make-or-buy, lump-sum, cost-plus-incentive"],"answer":"Fixed-price, cost reimbursable, time and materials"},
  {"q":"Which of the following helps to ensure that each requirement adds business value by linking it to the business and project objectives?","options":["Requirements traceability matrix","Work breakdown structure (WBS) dictionary","Requirements management plan","Requirements documentation"],"answer":"Requirements traceability matrix"},
  {"q":"A tool and technique used during the Collect Requirements process is:","options":["prototypes.","expert judgment.","alternatives identification.","product analysis."],"answer":"prototypes."},
  {"q":"The stakeholder register is an output of:","options":["Identify Stakeholders.","Plan Stakeholder Management.","Control Stakeholder Engagement.","Manage Stakeholder Engagement."],"answer":"Identify Stakeholders."},
  {"q":"An issue log is an input to which Project Human Resource Management process?","options":["Manage Project Team","Acquire Project Team","Plan Human Resource Management","Develop Project Team"],"answer":"Manage Project Team"},
  {"q":"Plan Communications Management develops an approach and plan for project communications based on stakeholders' needs and requirements and:","options":["Available organizational assets","Project staff assignments","Interpersonal skills","Enterprise environmental factors"],"answer":"Available organizational assets"},
  {"q":"The product scope description is used to:","options":["Gain stakeholders support for the project.","Document the characteristics of the product.","Describe the project in great detail.","Formally authorize the project."],"answer":"Document the characteristics of the product."},
  {"q":"A Project Management Office (PMO) manages a number of aspects, including what?","options":["Project scope, schedule, cost, and quality of the products of the work packages","Central coordinator of communication management across projects, and for the delivery of specific project objectives, organization opportunity assessment","Assigns project resources to best meet project objectives","Overall risk, overall opportunity and interdependencies among projects"],"answer":"Overall risk, overall opportunity and interdependencies among projects"},
  {"q":"Which Process Group contains those processes performed to define a new project?","options":["Initiating","Planning","Executing","Closing"],"answer":"Initiating"},
  {"q":"Soft logic is also known as what type of dependency?","options":["External","Discretionary","Mandatory","Internal"],"answer":"Discretionary"},
  {"q":"Which process uses occurrence probability and impact on project objectives to assess the priority of identified risks?","options":["Identify Risks","Perform Qualitative Risk Analysis","Plan Risk Management","Perform Quantitative Risk Analysis"],"answer":"Perform Qualitative Risk Analysis"},
  {"q":"Which of the following is a strategy to deal with positive risks or opportunities?","options":["Mitigate","Transfer","Exploit","Avoid"],"answer":"Exploit"},
  {"q":"Which type of risk diagram is useful for showing time ordering of events?","options":["Ishikawa","Milestone","Influence","Decision tree"],"answer":"Influence"},
  {"q":"Which of the following correctly explains the term 'progressive elaboration'?","options":["Changing project specifications continuously","Elaborate tracking of the project progress","Elaborate tracking of the project specifications with a change control system","Project specifications becoming more explicit and detailed as the project progresses"],"answer":"Project specifications becoming more explicit and detailed as the project progresses"},
  {"q":"Which characteristics do effective project managers possess?","options":["Project management knowledge, performance skills, and personal effectiveness","Preparedness, project management knowledge, and personality characteristics","General management, preparedness, and project management knowledge","Assertiveness, collaboration, and performance skills"],"answer":"Project management knowledge, performance skills, and personal effectiveness"},
  {"q":"Which process numerically analyzes the effect of identified risks on overall project objectives?","options":["Plan Risk Management","Plan Risk Responses","Perform Quantitative Risk Analysis","Perform Qualitative Risk Analysis"],"answer":"Perform Quantitative Risk Analysis"},
  {"q":"Which is an output of the Collect Requirements process?","options":["Requirements traceability matrix","Project scope statement","WBS dictionary","Work performance measurements"],"answer":"Requirements traceability matrix"},
  {"q":"What type of project structure is a hierarchically organized depiction of the resources by type?","options":["Organizational breakdown structure (OBS)","Resource breakdown structure (RBS)","Work breakdown structure (WBS)","Project breakdown structure (PBS)"],"answer":"Resource breakdown structure (RBS)"},
  {"q":"A stakeholder expresses a need not known to the project manager. The project manager most likely missed a step in which stakeholder management process?","options":["Plan Stakeholder Management","Identify Stakeholders","Manage Stakeholder Engagement","Control Stakeholder Engagement"],"answer":"Identify Stakeholders"},
  {"q":"Stakeholders can be identified in later stages of the project because the Identify Stakeholders process should be?","options":["Continuous","Discrete","Regulated","Arbitrary"],"answer":"Continuous"},
  {"q":"Prioritizing risks for further analysis or action by assessing and combining their probability of occurrence and impact takes place in which process?","options":["Monitor and Control Risks","Plan Risk Management","Perform Qualitative Risk Analysis","Perform Quantitative Risk Analysis"],"answer":"Perform Qualitative Risk Analysis"},
  {"q":"Which of the following is an output of the Distribute Information process?","options":["Project calendar","Communications management plan","Organizational process assets updates","Project document updates"],"answer":"Organizational process assets updates"},
  {"q":"Which statement is true about the project management body of knowledge?","options":["Recognized by every project manager","Constantly evolving","The sum of all knowledge related to project management","A sum of knowledge that should be applied on every project"],"answer":"Constantly evolving"},
  {"q":"An output of the Develop Project Team process is?","options":["Change requests","Team performance assessments","Project staff assignments","Project documents updates"],"answer":"Team performance assessments"},
  {"q":"Risk exists the moment that a project is?","options":["Planned","Conceived","Chartered","Executed"],"answer":"Conceived"},
  {"q":"Which standard has interrelationships to other project management disciplines such as program management and portfolio management?","options":["Program Management Body of Knowledge Guide","The Standard for Program Management","Organizational Project Management Maturity Model (OPM3$)","Guide to the Project Management Body of Knowledge (PMBOK®)"],"answer":"Guide to the Project Management Body of Knowledge (PMBOK®)"},
  {"q":"Which technique is commonly used for the Perform Quantitative Risk Analysis process?","options":["Brainstorming","Strategies for opportunities","Decision tree analysis","Risk data quality assessment"],"answer":"Decision tree analysis"},
  {"q":"Activity resource requirements and resource breakdown structure are outputs from what Project Time Management process?","options":["Schedule Control","Activity Definition","Schedule Development","Activity Resource Estimating"],"answer":"Activity Resource Estimating"},
  {"q":"Most experienced project managers know that:","options":["Every project requires the use of all processes in the PMBOK® Guide.","There is no single way to manage a project.","Project management techniques are risk free.","There is only one way to manage projects successfully."],"answer":"There is no single way to manage a project."},
  {"q":"Which input to Collect Requirements is used to identify stakeholders who can provide information on requirements?","options":["Stakeholder register","Scope management plan","Stakeholder management plan","Project charter"],"answer":"Stakeholder register"},
  {"q":"When addressing roles and responsibilities, which item ensures that the staff has the skills required to complete project activities?","options":["Authority","Role","Competency","Responsibility"],"answer":"Competency"},
  {"q":"Which of the following statements best describes the influence of stakeholders and the cost of changes as project time advances?","options":["The influence of the stakeholders increases, the cost of changes increases.","The influence of the stakeholders decreases, the cost of changes increases.","The influence of the stakeholders increases, the cost of changes decreases.","The influence of the stakeholders decreases, the cost of changes decreases."],"answer":"The influence of the stakeholders decreases, the cost of changes increases."},
  {"q":"The probability and impact matrix is primarily used to:","options":["Quantify risk issues for trends during a quality audit.","Develop a risk register for risk planning.","Evaluate each risk’s importance and priority during Perform Qualitative Risk Analysis.","Define risk and compare impacts during Perform Quantitative Risk Analysis."],"answer":"Evaluate each risk’s importance and priority during Perform Qualitative Risk Analysis."},
  {"q":"What is one of the objectives of Project Risk Management?","options":["Decrease the probability and impact of an event on project objectives.","Distinguish between a project risk and a project issue so that a risk mitigation plan can be put in place.","Increase the probability and impact of positive events.","Removal of project risk."],"answer":"Increase the probability and impact of positive events."},
  {"q":"The project scope statement and resource calendars are inputs to which Project Time Management process?","options":["Sequence Activities","Estimate Activity Resources","Develop Schedule","Control Schedule"],"answer":"Develop Schedule"},
  {"q":"Which group creativity technique asks a selected group of experts to answer questionnaires and provide feedback regarding the responses from each round of requirements gathering?","options":["The Delphi technique","Nominal group technique","Affinity diagram","Brainstorming"],"answer":"The Delphi technique"},
  {"q":"A project’s purpose or justification, measurable project objectives and related success criteria, a summary milestone schedule, and a summary budget are all components of which document?","options":["Work breakdown structure","Requirements document","Project charter","Project management plan"],"answer":"Project charter"},
  {"q":"The process of defining how the project scope will be validated and controlled is known as:","options":["Define Scope","Develop Project Management Plan","Plan Scope Management","Plan Quality Management"],"answer":"Plan Scope Management"},
  {"q":"Inputs to Identifying Stakeholders include:","options":["Project charter, procurement documents, enterprise environmental factors, and organizational process assets.","Project charter, stakeholder analysis, enterprise environmental factors, and organizational process assets.","Project charter, stakeholder analysis, enterprise environmental factors, and stakeholder management strategy.","Project charter, procurement documents, expert judgment, and organizational process assets."],"answer":"Project charter, procurement documents, enterprise environmental factors, and organizational process assets."},
  {"q":"Which of the following terms indicates a deliverable-oriented hierarchical decomposition of the project work?","options":["WBS directory","Activity list","WBS","Project schedule"],"answer":"WBS"},
  {"q":"One of the objectives of a quality audit is to:","options":["Highlight the need for root cause analysis.","Share the process documentation among stakeholders.","Offer assistance with non-value-added activities.","Identify all of the gaps or shortcomings."],"answer":"Identify all of the gaps or shortcomings."},
  {"q":"What is project management?","options":["A logical grouping of project management inputs, outputs, tools, and techniques","Applying knowledge, skills, tools, and techniques to project activities to meet the project requirements","Launching a process that can result in the authorization of a new project","A formal, approved document that defines how the project is executed, monitored, and controlled"],"answer":"Applying knowledge, skills, tools, and techniques to project activities to meet the project requirements"},
  {"q":"What is Project Portfolio Management?","options":["Management of a project by dividing the project into more manageable sub-projects.","Management of a project by utilizing a portfolio of general management skills, such as planning, organizing, staffing, executing and controlling.","Management of all projects undertaken by a company.","Management of a collection of projects that are grouped together to facilitate effective management and meet strategic business objectives."],"answer":"Management of a collection of projects that are grouped together to facilitate effective management and meet strategic business objectives."},
  {"q":"Which activity is an input to the select sellers process?","options":["Organizational process assets","Resource availability","Change control process","Team performance assessment"],"answer":"Organizational process assets"},
  {"q":"For any given project, the project manager, in collaboration with the project team, is responsible for:","options":["Applying knowledge, skills, and processes uniformly.","Informing the project sponsor about which processes are going to be used.","Tailoring the processes to fit the abilities of the organization.","Determining which particular processes are appropriate."],"answer":"Determining which particular processes are appropriate."},
  {"q":"Which type of contract is a hybrid of both a cost-reimbursable and a fixed-price contract?","options":["Cost Plus Award Fee Contract (CPAF)","Firm-Fixed -Price Contract (FFP)","Time and Material Contract (T&M)","Cost Plus Incentive Fee Contract (CPIF)"],"answer":"Time and Material Contract (T&M)"},
  {"q":"The process of prioritizing risks for further analysis or action is known as:","options":["Plan Risk Management","Plan Risk Responses","Perform Qualitative Risk Analysis","Perform Quantitative Risk Analysis"],"answer":"Perform Qualitative Risk Analysis"},
  {"q":"Which activity is an input to the Conduct Procurements process?","options":["Organizational process assets","Resource availability","Perform Integrated Change Control","Team performance assessment"],"answer":"Organizational process assets"},
  {"q":"A project lifecycle is defined as:","options":["A collection of generally sequential and sometimes overlapping project phases.","A process required to ensure that the project includes all the work required, and only the work required, to complete the project successfully.","A recognized standard for the project management profession.","The application of knowledge, skills, tools, and techniques to project activities to meet the project requirements."],"answer":"A collection of generally sequential and sometimes overlapping project phases."},
  {"q":"The purpose of developing a project scope management plan is to:","options":["Manage the timely completion of the project.","Ensure that the project includes all of the work required.","Make sure the project will satisfy the needs for which it was begun.","Reduce the risk of negative events in the project."],"answer":"Ensure that the project includes all of the work required."},
  {"q":"The creation of an internet site to engage stakeholders on a project is an example of which type of communication?","options":["Push","Pull","Interactive","Iterative"],"answer":"Pull"},
  {"q":"An input to the Collect Requirements process is the:","options":["Stakeholder register","Project management plan","Project scope statement","Requirements management plan"],"answer":"Stakeholder register"},
  {"q":"Which of the following is a tool or technique used in the Acquire Project Team process?","options":["Networking","Training","Negotiation","Issue log"],"answer":"Negotiation"},
  {"q":"Which tool or technique is used in the Develop Project Management Plan process?","options":["Pareto diagram","Performance reporting","SWOT analysis","Expert judgment"],"answer":"Expert judgment"},
  {"q":"Technical capability, past performance, and intellectual property rights are examples of:","options":["Performance measurement criteria","Source selection criteria","Product acceptance criteria","Phase exit criteria"],"answer":"Source selection criteria"},
  {"q":"Which of the following methods is a project selection technique?","options":["Flowcharting","Earned value","Cost-benefit analysis","Pareto analysis"],"answer":"Cost-benefit analysis"},
  {"q":"The business needs, assumptions, and constraints and the understanding of the customers’ needs and high-level requirements are documented in the:","options":["Project management plan","Project charter","Work breakdown structure","Stakeholder register"],"answer":"Project charter"},
  {"q":"Which tool or technique is used to develop a project charter?","options":["Project manager information systems","Expert judgment","Change control meetings","Brainstorming"],"answer":"Expert judgment"},
  {"q":"An input required in Define Scope is an organizational:","options":["Structure","Process asset","Matrix","Breakdown structure"],"answer":"Process asset"},
  {"q":"Which document in the project management plan can be updated in the Plan Procurement Management process?","options":["Budget estimates","Risk matrix","Requirements documentation","Procurement documents"],"answer":"Requirements documentation"},
  {"q":"In which Knowledge Area is the project charter developed?","options":["Project Cost Management","Project Scope Management","Project Time Management","Project Integration Management"],"answer":"Project Integration Management"},
  {"q":"Which process is conducted from project inception through completion and is ultimately the responsibility of the project manager?","options":["Control Quality","Monitor and Control Project Work","Control Scope","Perform Integrated Change Control"],"answer":"Perform Integrated Change Control"},
  {"q":"The Cost Management processes and their associated tools and techniques are usually selected during which of the following?","options":["Project finance management","Project cost estimation","Project life cycle definition","Project plan development"],"answer":"Project life cycle definition"},
  {"q":"A complete set of concepts, terms, and activities that make up an area of specialization is known as:","options":["A Knowledge Area","A Process Group","Program management","Portfolio management"],"answer":"A Knowledge Area"},
  {"q":"The product scope description is used to:","options":["Gain stakeholders' support for the project.","Progressively elaborate the characteristics of the product, service, or result.","Describe the project in great detail.","Define the process and criteria for accepting a completed product, service, or result."],"answer":"Progressively elaborate the characteristics of the product, service, or result."},
  {"q":"Which of the following documents allows the project manager to assess risks that may require near-term action?","options":["Probability and impact matrix","Contingency analysis report","Risk urgency assessment","Rolling wave plan"],"answer":"Risk urgency assessment"},
  {"q":"One of the key benefits of the Plan Human Resource Management process is that it:","options":["Outlines team selection guidelines and team member responsibilities.","Establishes project roles and responsibilities.","Improves teamwork, interpersonal skills, and competencies.","Provides an accurate appraisal of team member performance."],"answer":"Establishes project roles and responsibilities."},
  {"q":"Which process involves defining, preparing, and coordinating all subsidiary plans and integrating them into a comprehensive plan?","options":["Direct and Manage Project Work","Develop Project Management Plan","Plan Quality Management","Monitor and Control Project Work"],"answer":"Develop Project Management Plan"},
  {"q":"During project selection, which factor is most important?","options":["Types of constraints","Internal business needs","Budget","Schedule"],"answer":"Internal business needs"},
  {"q":"The specific technique for identifying a problem, discovering the causes that lead to it, and developing preventive actions is:","options":["Inspection","Use of quality checklists","Root cause analysis","Use of matrix diagrams"],"answer":"Root cause analysis"},
  {"q":"Projects can be divided into phases to provide better management control. Collectively, what are these phases known as?","options":["Complete project phase","Project life","The project life cycle","Project cycle"],"answer":"The project life cycle"},
  {"q":"Which of the following is used to illustrate the connections between work packages or activities and project team members?","options":["Hierarchical-type charts (HTC)","Organizational breakdown structure (OBS)","Work breakdown structure (WBS)","Responsibility assignment matrix (RAM)"],"answer":"Responsibility assignment matrix (RAM)"},
  {"q":"Which tools or techniques are used in the Plan Schedule Management process?","options":["Benchmarking, expert judgment, and analytical techniques","Statistical sampling, benchmarking, and meetings","Negotiations, pre-assignment, and multi-criteria decision analysis","Expert judgment, analytical techniques, and meetings"],"answer":"Expert judgment, analytical techniques, and meetings"},
  {"q":"A regression line is used to estimate:","options":["Whether or not a process is stable or has predictable performance.","How a change to the independent variable influences the value of the dependent variable.","The upper and lower specification limits on a control chart.","The central tendency, dispersion, and shape of a statistical distribution."],"answer":"How a change to the independent variable influences the value of the dependent variable."},
  {"q":"Which process involves the creation of a document that provides the project manager with the authority to apply resources to a project?","options":["Define Activities","Direct and Manage Project Work","Develop Project Management Plan","Develop Project Charter"],"answer":"Develop Project Charter"},
  {"q":"The only Process Group that comprises processes that typically occur from the beginning to the end of the project life cycle is:","options":["Planning","Executing","Monitoring and Controlling","Closing"],"answer":"Planning"},
  {"q":"Which quality planning tools and techniques are used to visually identify logical groupings based on natural relationships?","options":["Force field diagrams","Cause-and-effect diagrams","Affinity diagrams","Nominal group techniques"],"answer":"Affinity diagrams"}
 const questions = [
 {"q":"Which process determines the risks that might affect the project?","options":["Perform Qualitative Risk Analysis","Identify Risks","Plan Risk Management","Perform Quantitative Risk Analysis"],"answer":"Identify Risks"},
  {"q":"In the Plan Stakeholder Management process, expert judgment is used to:","options":["Provide information needed to plan appropriate ways to engage project stakeholders.","Ensure comprehensive identification and listing of new stakeholders.","Analyze the information needed to develop the project scope statement.","Decide the level of engagement of the stakeholders at each required stage."],"answer":"Decide the level of engagement of the stakeholders at each required stage."},
  {"q":"Plan Risk Management is the process of defining how to:","options":["Communicate identified risks to the project stakeholders.","Conduct risk management activities for a project.","Analyze the impact a specific risk may have on the project.","Address unexpected risks that may occur during a project."],"answer":"Conduct risk management activities for a project."},
  {"q":"Which of the following forecasting methods uses historical data as the basis for estimating future outcomes?","options":["Time series","Judgmental","Econometric","Simulation"],"answer":"Time series"},
  {"q":"Which process is included in the Project Integration Management Knowledge Area?","options":["Manage Project Team","Collect Requirements","Sequence Activities","Direct and Manage Project Work"],"answer":"Direct and Manage Project Work"},
  {"q":"Every project creates a unique product, service, or result that may be:","options":["tangible","targeted","organized","variable"],"answer":"tangible"},
  {"q":"Which of the following is an example of a risk symptom?","options":["Failure to meet intermediate milestones","Force of nature, such as a flood","Risk threshold target","Crashing, front loading, or fast tracking"],"answer":"Failure to meet intermediate milestones"},
  {"q":"A project can be defined as a:","options":["Temporary endeavor undertaken to create a unique product, service, or result","Temporary endeavor that produces repetitive outputs","Permanent endeavor undertaken to create a unique product, service, or result","Permanent endeavor that produces repetitive outputs"],"answer":"Temporary endeavor undertaken to create a unique product, service, or result"},
  {"q":"Which is the document that presents a hierarchical project organization?","options":["WBS","CPI","OBS","BOM"],"answer":"OBS"},
  {"q":"Project managers who lead by example and follow through on the commitments they make demonstrate the key interpersonal skill of:","options":["influencing","leadership","motivation","coaching"],"answer":"influencing"},
  {"q":"The project governance approach should be described in the:","options":["change control plan","project scope","statement of work","project management plan"],"answer":"project management plan"},
  {"q":"Which process includes prioritizing risks for subsequent further analysis or action by assessing and combining their probability of occurrence and impact?","options":["Perform Qualitative Risk Analysis","Perform Quantitative Risk Analysis","Plan Risk Management","Plan Risk Responses"],"answer":"Perform Qualitative Risk Analysis"},
  {"q":"A tool and technique used during the Define Scope process is:","options":["facilitated workshops.","observations.","questionnaires and surveys.","group creativity techniques."],"answer":"facilitated workshops."},
  {"q":"Which type of managers do composite organizations involve?","options":["Functional managers and manager of project managers","Functional managers only","Project managers only","Technical managers and project managers"],"answer":"Functional managers and manager of project managers"},
  {"q":"What name(s) is (are) associated with the Plan-Do-Check-Act cycle?","options":["Pareto","Ishikawa","Shewhart-Deming","Delphi"],"answer":"Shewhart-Deming"},
  {"q":"Which of the following strategies is used to deal with risks that may have a negative impact on project objectives?","options":["Exploit","Share","Enhance","Transfer"],"answer":"Transfer"},
  {"q":"A primary function of a project management office is to support project managers in a variety of ways, including which of the following?","options":["Developing and managing project policies, procedures, templates, and other shared documentation","Acting as the project sponsor by providing financial resources to the project","Resolving issues and change management within a shared governance structure","Aligning organizational/strategic direction that affects project and program goals"],"answer":"Developing and managing project policies, procedures, templates, and other shared documentation"},
  {"q":"Who selects the appropriate processes for a project?","options":["Project stakeholders","Project sponsor and project stakeholder","Project manager and project team","Project manager and project sponsor"],"answer":"Project manager and project team"},
  {"q":"Which of the following is an input to the Qualitative Risk Analysis process?","options":["Risk register","Risk data quality assessment","Risk categorization","Risk urgency"],"answer":"Risk register"},
  {"q":"Skills necessary for project management such as motivating to provide encouragement; listening actively; persuading a team to perform an action; and summarizing, recapping, and identifying next steps are known as:","options":["organizational skills","technical skills","communication skills","hard skills"],"answer":"communication skills"},
  {"q":"The Identify Stakeholders process is found in which Process Group?","options":["Initiating","Monitoring and Controlling","Planning","Executing"],"answer":"Initiating"},
  {"q":"The component of the human resource management plan that includes ways in which team members can obtain certifications that support their ability to benefit the project is known as:","options":["recognition and rewards","compliance","staff acquisition","training needs"],"answer":"training needs"},
  {"q":"What tool and technique is used to determine whether work and deliverables meet requirements and product acceptance criteria?","options":["Decomposition","Benchmarking","Inspection","Checklist analysis"],"answer":"Inspection"},
  {"q":"In which process is a project manager identified and given the authority to apply resources to project activities?","options":["Acquire Project Team","Develop Project Management Plan","Manage Project Execution","Develop Project Charter"],"answer":"Develop Project Charter"},
  {"q":"Project contracts generally fall into which of the following three broad categories?","options":["Fixed-price, cost reimbursable, time and materials","Make-or-buy, margin analysis, fixed-price","Time and materials, fixed-price, margin analysis","Make-or-buy, lump-sum, cost-plus-incentive"],"answer":"Fixed-price, cost reimbursable, time and materials"},
  {"q":"Which of the following helps to ensure that each requirement adds business value by linking it to the business and project objectives?","options":["Requirements traceability matrix","Work breakdown structure (WBS) dictionary","Requirements management plan","Requirements documentation"],"answer":"Requirements traceability matrix"},
  {"q":"A tool and technique used during the Collect Requirements process is:","options":["prototypes.","expert judgment.","alternatives identification.","product analysis."],"answer":"prototypes."},
  {"q":"The stakeholder register is an output of:","options":["Identify Stakeholders.","Plan Stakeholder Management.","Control Stakeholder Engagement.","Manage Stakeholder Engagement."],"answer":"Identify Stakeholders."},
  {"q":"An issue log is an input to which Project Human Resource Management process?","options":["Manage Project Team","Acquire Project Team","Plan Human Resource Management","Develop Project Team"],"answer":"Manage Project Team"},
  {"q":"Plan Communications Management develops an approach and plan for project communications based on stakeholders' needs and requirements and:","options":["Available organizational assets","Project staff assignments","Interpersonal skills","Enterprise environmental factors"],"answer":"Available organizational assets"},
  {"q":"The product scope description is used to:","options":["Gain stakeholders support for the project.","Document the characteristics of the product.","Describe the project in great detail.","Formally authorize the project."],"answer":"Document the characteristics of the product."},
  {"q":"A Project Management Office (PMO) manages a number of aspects, including what?","options":["Project scope, schedule, cost, and quality of the products of the work packages","Central coordinator of communication management across projects, and for the delivery of specific project objectives, organization opportunity assessment","Assigns project resources to best meet project objectives","Overall risk, overall opportunity and interdependencies among projects"],"answer":"Overall risk, overall opportunity and interdependencies among projects"},
  {"q":"Which Process Group contains those processes performed to define a new project?","options":["Initiating","Planning","Executing","Closing"],"answer":"Initiating"},
  {"q":"Soft logic is also known as what type of dependency?","options":["External","Discretionary","Mandatory","Internal"],"answer":"Discretionary"},
  {"q":"Which process uses occurrence probability and impact on project objectives to assess the priority of identified risks?","options":["Identify Risks","Perform Qualitative Risk Analysis","Plan Risk Management","Perform Quantitative Risk Analysis"],"answer":"Perform Qualitative Risk Analysis"},
  {"q":"Which of the following is a strategy to deal with positive risks or opportunities?","options":["Mitigate","Transfer","Exploit","Avoid"],"answer":"Exploit"},
  {"q":"Which type of risk diagram is useful for showing time ordering of events?","options":["Ishikawa","Milestone","Influence","Decision tree"],"answer":"Influence"},
  {"q":"Which of the following correctly explains the term 'progressive elaboration'?","options":["Changing project specifications continuously","Elaborate tracking of the project progress","Elaborate tracking of the project specifications with a change control system","Project specifications becoming more explicit and detailed as the project progresses"],"answer":"Project specifications becoming more explicit and detailed as the project progresses"},
  {"q":"Which characteristics do effective project managers possess?","options":["Project management knowledge, performance skills, and personal effectiveness","Preparedness, project management knowledge, and personality characteristics","General management, preparedness, and project management knowledge","Assertiveness, collaboration, and performance skills"],"answer":"Project management knowledge, performance skills, and personal effectiveness"},
  {"q":"Which process numerically analyzes the effect of identified risks on overall project objectives?","options":["Plan Risk Management","Plan Risk Responses","Perform Quantitative Risk Analysis","Perform Qualitative Risk Analysis"],"answer":"Perform Quantitative Risk Analysis"},
  {"q":"Which is an output of the Collect Requirements process?","options":["Requirements traceability matrix","Project scope statement","WBS dictionary","Work performance measurements"],"answer":"Requirements traceability matrix"},
  {"q":"What type of project structure is a hierarchically organized depiction of the resources by type?","options":["Organizational breakdown structure (OBS)","Resource breakdown structure (RBS)","Work breakdown structure (WBS)","Project breakdown structure (PBS)"],"answer":"Resource breakdown structure (RBS)"},
  {"q":"A stakeholder expresses a need not known to the project manager. The project manager most likely missed a step in which stakeholder management process?","options":["Plan Stakeholder Management","Identify Stakeholders","Manage Stakeholder Engagement","Control Stakeholder Engagement"],"answer":"Identify Stakeholders"},
  {"q":"Stakeholders can be identified in later stages of the project because the Identify Stakeholders process should be?","options":["Continuous","Discrete","Regulated","Arbitrary"],"answer":"Continuous"},
  {"q":"Prioritizing risks for further analysis or action by assessing and combining their probability of occurrence and impact takes place in which process?","options":["Monitor and Control Risks","Plan Risk Management","Perform Qualitative Risk Analysis","Perform Quantitative Risk Analysis"],"answer":"Perform Qualitative Risk Analysis"},
  {"q":"Which of the following is an output of the Distribute Information process?","options":["Project calendar","Communications management plan","Organizational process assets updates","Project document updates"],"answer":"Organizational process assets updates"},
  {"q":"Which statement is true about the project management body of knowledge?","options":["Recognized by every project manager","Constantly evolving","The sum of all knowledge related to project management","A sum of knowledge that should be applied on every project"],"answer":"Constantly evolving"},
  {"q":"An output of the Develop Project Team process is?","options":["Change requests","Team performance assessments","Project staff assignments","Project documents updates"],"answer":"Team performance assessments"},
  {"q":"Risk exists the moment that a project is?","options":["Planned","Conceived","Chartered","Executed"],"answer":"Conceived"},
  {"q":"Which standard has interrelationships to other project management disciplines such as program management and portfolio management?","options":["Program Management Body of Knowledge Guide","The Standard for Program Management","Organizational Project Management Maturity Model (OPM3$)","Guide to the Project Management Body of Knowledge (PMBOK®)"],"answer":"Guide to the Project Management Body of Knowledge (PMBOK®)"},
  {"q":"Which technique is commonly used for the Perform Quantitative Risk Analysis process?","options":["Brainstorming","Strategies for opportunities","Decision tree analysis","Risk data quality assessment"],"answer":"Decision tree analysis"},
  {"q":"Activity resource requirements and resource breakdown structure are outputs from what Project Time Management process?","options":["Schedule Control","Activity Definition","Schedule Development","Activity Resource Estimating"],"answer":"Activity Resource Estimating"},
  {"q":"Most experienced project managers know that:","options":["Every project requires the use of all processes in the PMBOK® Guide.","There is no single way to manage a project.","Project management techniques are risk free.","There is only one way to manage projects successfully."],"answer":"There is no single way to manage a project."},
  {"q":"Which input to Collect Requirements is used to identify stakeholders who can provide information on requirements?","options":["Stakeholder register","Scope management plan","Stakeholder management plan","Project charter"],"answer":"Stakeholder register"},
  {"q":"When addressing roles and responsibilities, which item ensures that the staff has the skills required to complete project activities?","options":["Authority","Role","Competency","Responsibility"],"answer":"Competency"},
  {"q":"Which of the following statements best describes the influence of stakeholders and the cost of changes as project time advances?","options":["The influence of the stakeholders increases, the cost of changes increases.","The influence of the stakeholders decreases, the cost of changes increases.","The influence of the stakeholders increases, the cost of changes decreases.","The influence of the stakeholders decreases, the cost of changes decreases."],"answer":"The influence of the stakeholders decreases, the cost of changes increases."},
  {"q":"The probability and impact matrix is primarily used to:","options":["Quantify risk issues for trends during a quality audit.","Develop a risk register for risk planning.","Evaluate each risk’s importance and priority during Perform Qualitative Risk Analysis.","Define risk and compare impacts during Perform Quantitative Risk Analysis."],"answer":"Evaluate each risk’s importance and priority during Perform Qualitative Risk Analysis."},
  {"q":"What is one of the objectives of Project Risk Management?","options":["Decrease the probability and impact of an event on project objectives.","Distinguish between a project risk and a project issue so that a risk mitigation plan can be put in place.","Increase the probability and impact of positive events.","Removal of project risk."],"answer":"Increase the probability and impact of positive events."},
  {"q":"The project scope statement and resource calendars are inputs to which Project Time Management process?","options":["Sequence Activities","Estimate Activity Resources","Develop Schedule","Control Schedule"],"answer":"Develop Schedule"},
  {"q":"Which group creativity technique asks a selected group of experts to answer questionnaires and provide feedback regarding the responses from each round of requirements gathering?","options":["The Delphi technique","Nominal group technique","Affinity diagram","Brainstorming"],"answer":"The Delphi technique"},
  {"q":"A project’s purpose or justification, measurable project objectives and related success criteria, a summary milestone schedule, and a summary budget are all components of which document?","options":["Work breakdown structure","Requirements document","Project charter","Project management plan"],"answer":"Project charter"},
  {"q":"The process of defining how the project scope will be validated and controlled is known as:","options":["Define Scope","Develop Project Management Plan","Plan Scope Management","Plan Quality Management"],"answer":"Plan Scope Management"},
  {"q":"Inputs to Identifying Stakeholders include:","options":["Project charter, procurement documents, enterprise environmental factors, and organizational process assets.","Project charter, stakeholder analysis, enterprise environmental factors, and organizational process assets.","Project charter, stakeholder analysis, enterprise environmental factors, and stakeholder management strategy.","Project charter, procurement documents, expert judgment, and organizational process assets."],"answer":"Project charter, procurement documents, enterprise environmental factors, and organizational process assets."},
  {"q":"Which of the following terms indicates a deliverable-oriented hierarchical decomposition of the project work?","options":["WBS directory","Activity list","WBS","Project schedule"],"answer":"WBS"},
  {"q":"One of the objectives of a quality audit is to:","options":["Highlight the need for root cause analysis.","Share the process documentation among stakeholders.","Offer assistance with non-value-added activities.","Identify all of the gaps or shortcomings."],"answer":"Identify all of the gaps or shortcomings."},
  {"q":"What is project management?","options":["A logical grouping of project management inputs, outputs, tools, and techniques","Applying knowledge, skills, tools, and techniques to project activities to meet the project requirements","Launching a process that can result in the authorization of a new project","A formal, approved document that defines how the project is executed, monitored, and controlled"],"answer":"Applying knowledge, skills, tools, and techniques to project activities to meet the project requirements"},
  {"q":"What is Project Portfolio Management?","options":["Management of a project by dividing the project into more manageable sub-projects.","Management of a project by utilizing a portfolio of general management skills, such as planning, organizing, staffing, executing and controlling.","Management of all projects undertaken by a company.","Management of a collection of projects that are grouped together to facilitate effective management and meet strategic business objectives."],"answer":"Management of a collection of projects that are grouped together to facilitate effective management and meet strategic business objectives."},
  {"q":"Which activity is an input to the select sellers process?","options":["Organizational process assets","Resource availability","Change control process","Team performance assessment"],"answer":"Organizational process assets"},
  {"q":"For any given project, the project manager, in collaboration with the project team, is responsible for:","options":["Applying knowledge, skills, and processes uniformly.","Informing the project sponsor about which processes are going to be used.","Tailoring the processes to fit the abilities of the organization.","Determining which particular processes are appropriate."],"answer":"Determining which particular processes are appropriate."},
  {"q":"Which type of contract is a hybrid of both a cost-reimbursable and a fixed-price contract?","options":["Cost Plus Award Fee Contract (CPAF)","Firm-Fixed -Price Contract (FFP)","Time and Material Contract (T&M)","Cost Plus Incentive Fee Contract (CPIF)"],"answer":"Time and Material Contract (T&M)"},
  {"q":"The process of prioritizing risks for further analysis or action is known as:","options":["Plan Risk Management","Plan Risk Responses","Perform Qualitative Risk Analysis","Perform Quantitative Risk Analysis"],"answer":"Perform Qualitative Risk Analysis"},
  {"q":"Which activity is an input to the Conduct Procurements process?","options":["Organizational process assets","Resource availability","Perform Integrated Change Control","Team performance assessment"],"answer":"Organizational process assets"},
  {"q":"A project lifecycle is defined as:","options":["A collection of generally sequential and sometimes overlapping project phases.","A process required to ensure that the project includes all the work required, and only the work required, to complete the project successfully.","A recognized standard for the project management profession.","The application of knowledge, skills, tools, and techniques to project activities to meet the project requirements."],"answer":"A collection of generally sequential and sometimes overlapping project phases."},
  {"q":"The purpose of developing a project scope management plan is to:","options":["Manage the timely completion of the project.","Ensure that the project includes all of the work required.","Make sure the project will satisfy the needs for which it was begun.","Reduce the risk of negative events in the project."],"answer":"Ensure that the project includes all of the work required."},
  {"q":"The creation of an internet site to engage stakeholders on a project is an example of which type of communication?","options":["Push","Pull","Interactive","Iterative"],"answer":"Pull"},
  {"q":"An input to the Collect Requirements process is the:","options":["Stakeholder register","Project management plan","Project scope statement","Requirements management plan"],"answer":"Stakeholder register"},
  {"q":"Which of the following is a tool or technique used in the Acquire Project Team process?","options":["Networking","Training","Negotiation","Issue log"],"answer":"Negotiation"},
  {"q":"Which tool or technique is used in the Develop Project Management Plan process?","options":["Pareto diagram","Performance reporting","SWOT analysis","Expert judgment"],"answer":"Expert judgment"},
  {"q":"Technical capability, past performance, and intellectual property rights are examples of:","options":["Performance measurement criteria","Source selection criteria","Product acceptance criteria","Phase exit criteria"],"answer":"Source selection criteria"},
  {"q":"Which of the following methods is a project selection technique?","options":["Flowcharting","Earned value","Cost-benefit analysis","Pareto analysis"],"answer":"Cost-benefit analysis"},
  {"q":"The business needs, assumptions, and constraints and the understanding of the customers’ needs and high-level requirements are documented in the:","options":["Project management plan","Project charter","Work breakdown structure","Stakeholder register"],"answer":"Project charter"},
  {"q":"Which tool or technique is used to develop a project charter?","options":["Project manager information systems","Expert judgment","Change control meetings","Brainstorming"],"answer":"Expert judgment"},
  {"q":"An input required in Define Scope is an organizational:","options":["Structure","Process asset","Matrix","Breakdown structure"],"answer":"Process asset"},
  {"q":"Which document in the project management plan can be updated in the Plan Procurement Management process?","options":["Budget estimates","Risk matrix","Requirements documentation","Procurement documents"],"answer":"Requirements documentation"},
  {"q":"In which Knowledge Area is the project charter developed?","options":["Project Cost Management","Project Scope Management","Project Time Management","Project Integration Management"],"answer":"Project Integration Management"},
  {"q":"Which process is conducted from project inception through completion and is ultimately the responsibility of the project manager?","options":["Control Quality","Monitor and Control Project Work","Control Scope","Perform Integrated Change Control"],"answer":"Perform Integrated Change Control"},
  {"q":"The Cost Management processes and their associated tools and techniques are usually selected during which of the following?","options":["Project finance management","Project cost estimation","Project life cycle definition","Project plan development"],"answer":"Project life cycle definition"},
  {"q":"A complete set of concepts, terms, and activities that make up an area of specialization is known as:","options":["A Knowledge Area","A Process Group","Program management","Portfolio management"],"answer":"A Knowledge Area"},
  {"q":"The product scope description is used to:","options":["Gain stakeholders' support for the project.","Progressively elaborate the characteristics of the product, service, or result.","Describe the project in great detail.","Define the process and criteria for accepting a completed product, service, or result."],"answer":"Progressively elaborate the characteristics of the product, service, or result."},
  {"q":"Which of the following documents allows the project manager to assess risks that may require near-term action?","options":["Probability and impact matrix","Contingency analysis report","Risk urgency assessment","Rolling wave plan"],"answer":"Risk urgency assessment"},
  {"q":"One of the key benefits of the Plan Human Resource Management process is that it:","options":["Outlines team selection guidelines and team member responsibilities.","Establishes project roles and responsibilities.","Improves teamwork, interpersonal skills, and competencies.","Provides an accurate appraisal of team member performance."],"answer":"Establishes project roles and responsibilities."},
  {"q":"Which process involves defining, preparing, and coordinating all subsidiary plans and integrating them into a comprehensive plan?","options":["Direct and Manage Project Work","Develop Project Management Plan","Plan Quality Management","Monitor and Control Project Work"],"answer":"Develop Project Management Plan"},
  {"q":"During project selection, which factor is most important?","options":["Types of constraints","Internal business needs","Budget","Schedule"],"answer":"Internal business needs"},
  {"q":"The specific technique for identifying a problem, discovering the causes that lead to it, and developing preventive actions is:","options":["Inspection","Use of quality checklists","Root cause analysis","Use of matrix diagrams"],"answer":"Root cause analysis"},
  {"q":"Projects can be divided into phases to provide better management control. Collectively, what are these phases known as?","options":["Complete project phase","Project life","The project life cycle","Project cycle"],"answer":"The project life cycle"},
  {"q":"Which of the following is used to illustrate the connections between work packages or activities and project team members?","options":["Hierarchical-type charts (HTC)","Organizational breakdown structure (OBS)","Work breakdown structure (WBS)","Responsibility assignment matrix (RAM)"],"answer":"Responsibility assignment matrix (RAM)"},
  {"q":"Which tools or techniques are used in the Plan Schedule Management process?","options":["Benchmarking, expert judgment, and analytical techniques","Statistical sampling, benchmarking, and meetings","Negotiations, pre-assignment, and multi-criteria decision analysis","Expert judgment, analytical techniques, and meetings"],"answer":"Expert judgment, analytical techniques, and meetings"},
  {"q":"A regression line is used to estimate:","options":["Whether or not a process is stable or has predictable performance.","How a change to the independent variable influences the value of the dependent variable.","The upper and lower specification limits on a control chart.","The central tendency, dispersion, and shape of a statistical distribution."],"answer":"How a change to the independent variable influences the value of the dependent variable."},
  {"q":"Which process involves the creation of a document that provides the project manager with the authority to apply resources to a project?","options":["Define Activities","Direct and Manage Project Work","Develop Project Management Plan","Develop Project Charter"],"answer":"Develop Project Charter"},
  {"q":"The only Process Group that comprises processes that typically occur from the beginning to the end of the project life cycle is:","options":["Planning","Executing","Monitoring and Controlling","Closing"],"answer":"Planning"},
  {"q":"Which quality planning tools and techniques are used to visually identify logical groupings based on natural relationships?","options":["Force field diagrams","Cause-and-effect diagrams","Affinity diagrams","Nominal group techniques"],"answer":"Affinity diagrams"}
{
    #: "1",
    Question: "Which process determines the risks that might affect the project?",
    A: "Perform Qualitative Risk Analysis",
    B: "Identify Risks",
    C: "Plan Risk Management",
    D: "Perform Quantitative Risk Analysis",
    Answer: "B"
  },
  {
    #: "2",
    Question: "In the Plan Stakeholder Management process, expert judgment is used to:",
    A: "Provide information needed to plan appropriate ways to engage project stakeholders.",
    B: "Ensure comprehensive identification and listing of new stakeholders.",
    C: "Analyze the information needed to develop the project scope statement.",
    D: "Decide the level of engagement of the stakeholders at each required stage.",
    Answer: "D"
  },
  {
    #: "3",
    Question: "Plan Risk Management is the process of defining how to:",
    A: "Communicate identified risks to the project stakeholders.",
    B: "Conduct risk management activities for a project.",
    C: "Analyze the impact a specific risk may have on the project.",
    D: "Address unexpected risks that may occur during a project.",
    Answer: "B"
  },
  {
    #: "4",
    Question: "Which of the following forecasting methods uses historical data as the basis for estimating future outcomes?",
    A: "Time series",
    B: "Judgmental",
    C: "Econometric",
    D: "Simulation",
    Answer: "A"
  },
  {
    #: "5",
    Question: "Which process is included in the Project Integration Management Knowledge Area?",
    A: "Manage Project Team",
    B: "Collect Requirements",
    C: "Sequence Activities",
    D: "Direct and Manage Project Work",
    Answer: "D"
  },
  {
    #: "6",
    Question: "Every project creates a unique product, service, or result that may be:",
    A: "tangible",
    B: "targeted",
    C: "organized",
    D: "variable",
    Answer: "A"
  },
  {
    #: "7",
    Question: "Which of the following is an example of a risk symptom?",
    A: "Failure to meet intermediate milestones",
    B: "Force of nature, such as a flood",
    C: "Risk threshold target",
    D: "Crashing, front loading, or fast tracking",
    Answer: "A"
  },
  {
    #: "8",
    Question: "A project can be defined as a:",
    A: "Temporary endeavor undertaken to create a unique product, service, or result",
    B: "Temporary endeavor that produces repetitive outputs",
    C: "Permanent endeavor undertaken to create a unique product, service, or result",
    D: "Permanent endeavor that produces repetitive outputs",
    Answer: "A"
  },
  {
    #: "9",
    Question: "Which is the document that presents a hierarchical project organization?",
    A: "WBS",
    B: "CPI",
    C: "OBS",
    D: "BOM",
    Answer: "C"
  },
  {
    #: "10",
    Question: "Project managers who lead by example and follow through on the commitments they make demonstrate the key interpersonal skill of:",
    A: "influencing",
    B: "leadership",
    C: "motivation",
    D: "coaching",
    Answer: "A"
  },
  {
    #: "11",
    Question: "The project governance approach should be described in the:",
    A: "change control plan",
    B: "project scope",
    C: "statement of work",
    D: "project management plan",
    Answer: "D"
  },
  {
    #: "12",
    Question: "Which process includes prioritizing risks for subsequent further analysis or action by assessing and combining their probability of occurrence and impact?",
    A: "Perform Qualitative Risk Analysis",
    B: "Perform Quantitative Risk Analysis",
    C: "Plan Risk Management",
    D: "Plan Risk Responses",
    Answer: "A"
  },
  {
    #: "13",
    Question: "A tool and technique used during the Define Scope process is:",
    A: "facilitated workshops.",
    B: "observations.",
    C: "questionnaires and surveys.",
    D: "group creativity techniques.",
    Answer: "A"
  },
  {
    #: "14",
    Question: "Which type of managers do composite organizations involve?",
    A: "Functional managers and manager of project managers",
    B: "Functional managers only",
    C: "Project managers only",
    D: "Technical managers and project managers",
    Answer: "A"
  },
  {
    #: "15",
    Question: "What name(s) is (are) associated with the Plan-Do-Check-Act cycle?",
    A: "Pareto",
    B: "Ishikawa",
    C: "Shewhart-Deming",
    D: "Delphi",
    Answer: "C"
  },
  {
    #: "16",
    Question: "Which of the following strategies is used to deal with risks that may have a negative impact on project objectives?",
    A: "Exploit",
    B: "Share",
    C: "Enhance",
    D: "Transfer",
    Answer: "D"
  },
  {
    #: "17",
    Question: "A primary function of a project management office is to support project managers in a variety of ways, including which of the following?",
    A: "Developing and managing project policies, procedures, templates, and other shared documentation",
    B: "Acting as the project sponsor by providing financial resources to the project",
    C: "Resolving issues and change management within a shared governance structure",
    D: "Aligning organizational/strategic direction that affects project and program goals",
    Answer: "A"
  },
  {
    #: "18",
    Question: "Who selects the appropriate processes for a project?",
    A: "Project stakeholders",
    B: "Project sponsor and project stakeholder",
    C: "Project manager and project team",
    D: "Project manager and project sponsor",
    Answer: "C"
  },
  {
    #: "19",
    Question: "Which of the following is an input to the Qualitative Risk Analysis process?",
    A: "Risk register",
    B: "Risk data quality assessment",
    C: "Risk categorization",
    D: "Risk urgency",
    Answer: "A"
  },
  {
    #: "20",
    Question: "Skills necessary for project management such as motivating to provide encouragement; listening actively; persuading a team to perform an action; and summarizing, recapping, and identifying next steps are known as:",
    A: "organizational skills",
    B: "technical skills",
    C: "communication skills",
    D: "hard skills",
    Answer: "C"
  },
  {
    #: "21",
    Question: "The Identify Stakeholders process is found in which Process Group?",
    A: "Initiating",
    B: "Monitoring and Controlling",
    C: "Planning",
    D: "Executing",
    Answer: "A"
  },
  {
    #: "22",
    Question: "The component of the human resource management plan that includes ways in which team members can obtain certifications that support their ability to benefit the project is known as:",
    A: "recognition and rewards",
    B: "compliance",
    C: "staff acquisition",
    D: "training needs",
    Answer: "D"
  },
  {
    #: "23",
    Question: "What tool and technique is used to determine whether work and deliverables meet requirements and product acceptance criteria?",
    A: "Decomposition",
    B: "Benchmarking",
    C: "Inspection",
    D: "Checklist analysis",
    Answer: "C"
  },
  {
    #: "24",
    Question: "In which process is a project manager identified and given the authority to apply resources to project activities?",
    A: "Acquire Project Team",
    B: "Develop Project Management Plan",
    C: "Manage Project Execution",
    D: "Develop Project Charter",
    Answer: "D"
  },
  {
    #: "25",
    Question: "Project contracts generally fall into which of the following three broad categories?",
    A: "Fixed-price, cost reimbursable, time and materials",
    B: "Make-or-buy, margin analysis, fixed-price",
    C: "Time and materials, fixed-price, margin analysis",
    D: "Make-or-buy, lump-sum, cost-plus-incentive",
    Answer: "A"
  },
  {
    #: "26",
    Question: "Which of the following helps to ensure that each requirement adds business value by linking it to the business and project objectives?",
    A: "Requirements traceability matrix",
    B: "Work breakdown structure (WBS) dictionary",
    C: "Requirements management plan",
    D: "Requirements documentation",
    Answer: "A"
  },
  {
    #: "27",
    Question: "A tool and technique used during the Collect Requirements process is:",
    A: "prototypes.",
    B: "expert judgment.",
    C: "alternatives identification.",
    D: "product analysis.",
    Answer: "A"
  },
  {
    #: "28",
    Question: "The stakeholder register is an output of:",
    A: "Identify Stakeholders.",
    B: "Plan Stakeholder Management.",
    C: "Control Stakeholder Engagement.",
    D: "Manage Stakeholder Engagement.",
    Answer: "A"
  },
  {
    #: "29",
    Question: "An issue log is an input to which Project Human Resource Management process?",
    A: "Manage Project Team",
    B: "Acquire Project Team",
    C: "Plan Human Resource Management",
    D: "Develop Project Team",
    Answer: "A"
  },
  {
    #: "30",
    Question: "Plan Communications Management develops an approach and plan for project communications based on stakeholders' needs and requirements and:",
    A: "Available organizational assets",
    B: "Project staff assignments",
    C: "Interpersonal skills",
    D: "Enterprise environmental factors",
    Answer: "A"
  },
  {
    #: "31",
    Question: "The product scope description is used to:",
    A: "Gain stakeholders support for the project.",
    B: "Document the characteristics of the product.",
    C: "Describe the project in great detail.",
    D: "Formally authorize the project.",
    Answer: "B"
  },
  {
    #: "32",
    Question: "A Project Management Office (PMO) manages a number of aspects, including what?",
    A: "Project scope, schedule, cost, and quality of the products of the work packages",
    B: "Central coordinator of communication management across projects, and for the delivery of specific project objectives, organization opportunity assessment",
    C: "Assigns project resources to best meet project objectives",
    D: "Overall risk, overall opportunity and interdependencies among projects",
    Answer: "D"
  },
  {
    #: "33",
    Question: "Which Process Group contains those processes performed to define a new project?",
    A: "Initiating",
    B: "Planning",
    C: "Executing",
    D: "Closing",
    Answer: "A"
  },
  {
    #: "34",
    Question: "Soft logic is also known as what type of dependency?",
    A: "External",
    B: "Discretionary",
    C: "Mandatory",
    D: "Internal",
    Answer: "B"
  },
  {
    #: "35",
    Question: "Which process uses occurrence probability and impact on project objectives to assess the priority of identified risks?",
    A: "Identify Risks",
    B: "Perform Qualitative Risk Analysis",
    C: "Plan Risk Management",
    D: "Perform Quantitative Risk Analysis",
    Answer: "B"
  },
  {
    #: "36",
    Question: "Which of the following is a strategy to deal with positive risks or opportunities?",
    A: "Mitigate",
    B: "Transfer",
    C: "Exploit",
    D: "Avoid",
    Answer: "C"
  },
  {
    #: "37",
    Question: "Which type of risk diagram is useful for showing time ordering of events?",
    A: "Ishikawa",
    B: "Milestone",
    C: "Influence",
    D: "Decision tree",
    Answer: "C"
  },
  {
    #: "38",
    Question: "Which of the following correctly explains the term \"progressive elaboration\"?,
    A: "Changing project specifications continuously",
    B: "Elaborate tracking of the project progress",
    C: "Elaborate tracking of the project specifications with a change control system",
    D: "Project specifications becoming more explicit and detailed as the project progresses",
    Answer: "D"
  },
  {
    #: "39",
    Question: "Which characteristics do effective project managers possess?",
    A: "Project management knowledge, performance skills, and personal effectiveness",
    B: "Preparedness, project management knowledge, and personality characteristics",
    C: "General management, preparedness, and project management knowledge",
    D: "Assertiveness, collaboration, and performance skills",
    Answer: "A"
  },
  {
    #: "40",
    Question: "Which process numerically analyzes the effect of identified risks on overall project objectives?",
    A: "Plan Risk Management",
    B: "Plan Risk Responses",
    C: "Perform Quantitative Risk Analysis",
    D: "Perform Qualitative Risk Analysis",
    Answer: "C"
  },
  {
    #: "41",
    Question: "Which is an output of the Collect Requirements process?",
    A: "Requirements traceability matrix",
    B: "Project scope statement",
    C: "WBS dictionary",
    D: "Work performance measurements",
    Answer: "A"
  },
  {
    #: "42",
    Question: "What type of project structure is a hierarchically organized depiction of the resources by type?",
    A: "Organizational breakdown structure (OBS)",
    B: "Resource breakdown structure (RBS)",
    C: "Work breakdown structure (WBS)",
    D: "Project breakdown structure (PBS)",
    Answer: "B"
  },
  {
    #: "43",
    Question: "A stakeholder expresses a need not known to the project manager. The project manager most likely missed a step in which stakeholder management process?",
    A: "Plan Stakeholder Management",
    B: "Identify Stakeholders",
    C: "Manage Stakeholder Engagement",
    D: "Control Stakeholder Engagement",
    Answer: "B"
  },
  {
    #: "44",
    Question: "Stakeholders can be identified in later stages of the project because the Identify Stakeholders process should be?",
    A: "Continuous",
    B: "Discrete",
    C: "Regulated",
    D: "Arbitrary",
    Answer: "A"
  },
  {
    #: "45",
    Question: "Prioritizing risks for further analysis or action by assessing and combining their probability of occurrence and impact takes place in which process?",
    A: "Monitor and Control Risks",
    B: "Plan Risk Management",
    C: "Perform Qualitative Risk Analysis",
    D: "Perform Quantitative Risk Analysis",
    Answer: "C"
  },
  {
    #: "46",
    Question: "Which of the following is an output of the Distribute Information process?",
    A: "Project calendar",
    B: "Communications management plan",
    C: "Organizational process assets updates",
    D: "Project document updates",
    Answer: "C"
  },
  {
    #: "47",
    Question: "Which statement is true about the project management body of knowledge?",
    A: "Recognized by every project manager",
    B: "Constantly evolving",
    C: "The sum of all knowledge related to project management",
    D: "A sum of knowledge that should be applied on every project",
    Answer: "B"
  },
  {
    #: "48",
    Question: "An output of the Develop Project Team process is?",
    A: "Change requests",
    B: "Team performance assessments",
    C: "Project staff assignments",
    D: "Project documents updates",
    Answer: "B"
  },
  {
    #: "49",
    Question: "Risk exists the moment that a project is?",
    A: "Planned",
    B: "Conceived",
    C: "Chartered",
    D: "Executed",
    Answer: "B"
  },
  {
    #: "50",
    Question: "Which standard has interrelationships to other project management disciplines such as program management and portfolio management?",
    A: "Program Management Body of Knowledge Guide",
    B: "The Standard for Program Management",
    C: "Organizational Project Management Maturity Model (OPM3$)",
    D: "Guide to the Project Management Body of Knowledge (PMBOK®)",
    Answer: "D"
  },
  {
    #: "51",
    Question: "Which technique is commonly used for the Perform Quantitative Risk Analysis process?",
    A: "Brainstorming",
    B: "Strategies for opportunities",
    C: "Decision tree analysis",
    D: "Risk data quality assessment",
    Answer: "C"
  },
  {
    #: "52",
    Question: "Activity resource requirements and resource breakdown structure are outputs from what Project Time Management process?",
    A: "Schedule Control",
    B: "Activity Definition",
    C: "Schedule Development",
    D: "Activity Resource Estimating",
    Answer: "D"
  },
  {
    #: "53",
    Question: "Most experienced project managers know that:",
    A: "Every project requires the use of all processes in the PMBOK® Guide.",
    B: "There is no single way to manage a project.",
    C: "Project management techniques are risk free.",
    D: "There is only one way to manage projects successfully.",
    Answer: "B"
  },
  {
    #: "54",
    Question: "Which input to Collect Requirements is used to identify stakeholders who can provide information on requirements?",
    A: "Stakeholder register",
    B: "Scope management plan",
    C: "Stakeholder management plan",
    D: "Project charter",
    Answer: "A"
  },
  {
    #: "55",
    Question: "When addressing roles and responsibilities, which item ensures that the staff has the skills required to complete project activities?",
    A: "Authority",
    B: "Role",
    C: "Competency",
    D: "Responsibility",
    Answer: "C"
  },
  {
    #: "56",
    Question: "Which of the following statements best describes the influence of stakeholders and the cost of changes as project time advances?",
    A: "The influence of the stakeholders increases, the cost of changes increases.",
    B: "The influence of the stakeholders decreases, the cost of changes increases.",
    C: "The influence of the stakeholders increases, the cost of changes decreases.",
    D: "The influence of the stakeholders decreases, the cost of changes decreases.",
    Answer: "B"
  },
  {
    #: "57",
    Question: "The probability and impact matrix is primarily used to:",
    A: "Quantify risk issues for trends during a quality audit.",
    B: "Develop a risk register for risk planning.",
    C: "Evaluate each risk’s importance and priority during Perform Qualitative Risk Analysis.",
    D: "Define risk and compare impacts during Perform Quantitative Risk Analysis.",
    Answer: "C"
  },
  {
    #: "58",
    Question: "What is one of the objectives of Project Risk Management?",
    A: "Decrease the probability and impact of an event on project objectives.",
    B: "Distinguish between a project risk and a project issue so that a risk mitigation plan can be put in place.",
    C: "Increase the probability and impact of positive events.",
    D: "Removal of project risk.",
    Answer: "C"
  },
  {
    #: "59",
    Question: "The project scope statement and resource calendars are inputs to which Project Time Management process?",
    A: "Sequence Activities",
    B: "Estimate Activity Resources",
    C: "Develop Schedule",
    D: "Control Schedule",
    Answer: "C"
  },
  {
    #: "60",
    Question: "Which group creativity technique asks a selected group of experts to answer questionnaires and provide feedback regarding the responses from each round of requirements gathering?",
    A: "The Delphi technique",
    B: "Nominal group technique",
    C: "Affinity diagram",
    D: "Brainstorming",
    Answer: "A"
  },
  {
    #: "61",
    Question: "A project’s purpose or justification, measurable project objectives and related success criteria, a summary milestone schedule, and a summary budget are all components of which document?",
    A: "Work breakdown structure",
    B: "Requirements document",
    C: "Project charter",
    D: "Project management plan",
    Answer: "C"
  },
  {
    #: "62",
    Question: "The process of defining how the project scope will be validated and controlled is known as:",
    A: "Define Scope",
    B: "Develop Project Management Plan",
    C: "Plan Scope Management",
    D: "Plan Quality Management",
    Answer: "C"
  },
  {
    #: "63",
    Question: "Inputs to Identifying Stakeholders include:",
    A: "Project charter, procurement documents, enterprise environmental factors, and organizational process assets.",
    B: "Project charter, stakeholder analysis, enterprise environmental factors, and organizational process assets.",
    C: "Project charter, stakeholder analysis, enterprise environmental factors, and stakeholder management strategy.",
    D: "Project charter, procurement documents, expert judgment, and organizational process assets.",
    Answer: "A"
  },
  {
    #: "64",
    Question: "Which of the following terms indicates a deliverable-oriented hierarchical decomposition of the project work?",
    A: "WBS directory",
    B: "Activity list",
    C: "WBS",
    D: "Project schedule",
    Answer: "C"
  },
  {
    #: "65",
    Question: "One of the objectives of a quality audit is to:",
    A: "Highlight the need for root cause analysis.",
    B: "Share the process documentation among stakeholders.",
    C: "Offer assistance with non-value-added activities.",
    D: "Identify all of the gaps or shortcomings.",
    Answer: "D"
  },
  {
    #: "66",
    Question: "What is project management?",
    A: "A logical grouping of project management inputs, outputs, tools, and techniques",
    B: "Applying knowledge, skills, tools, and techniques to project activities to meet the project requirements",
    C: "Launching a process that can result in the authorization of a new project",
    D: "A formal, approved document that defines how the project is executed, monitored, and controlled",
    Answer: "B"
  },
  {
    #: "67",
    Question: "What is Project Portfolio Management?",
    A: "Management of a project by dividing the project into more manageable sub-projects.",
    B: "Management of a project by utilizing a portfolio of general management skills, such as planning, organizing, staffing, executing and controlling.",
    C: "Management of all projects undertaken by a company.",
    D: "Management of a collection of projects that are grouped together to facilitate effective management and meet strategic business objectives.",
    Answer: "D"
  },
  {
    #: "68",
    Question: "Which activity is an input to the select sellers process?",
    A: "Organizational process assets",
    B: "Resource availability",
    C: "Change control process",
    D: "Team performance assessment",
    Answer: "A"
  },
  {
    #: "69",
    Question: "For any given project, the project manager, in collaboration with the project team, is responsible for:",
    A: "Applying knowledge, skills, and processes uniformly.",
    B: "Informing the project sponsor about which processes are going to be used.",
    C: "Tailoring the processes to fit the abilities of the organization.",
    D: "Determining which particular processes are appropriate.",
    Answer: "D"
  },
  {
    #: "70",
    Question: "Which type of contract is a hybrid of both a cost-reimbursable and a fixed-price contract?",
    A: "Cost Plus Award Fee Contract (CPAF)",
    B: "Firm-Fixed -Price Contract (FFP)",
    C: "Time and Material Contract (T&M)",
    D: "Cost Plus Incentive Fee Contract (CPIF)",
    Answer: "C"
  },
  {
    #: "71",
    Question: "The process of prioritizing risks for further analysis or action is known as:",
    A: "Plan Risk Management",
    B: "Plan Risk Responses",
    C: "Perform Qualitative Risk Analysis",
    D: "Perform Quantitative Risk Analysis",
    Answer: "C"
  },
  {
    #: "72",
    Question: "Which activity is an input to the Conduct Procurements process?",
    A: "Organizational process assets",
    B: "Resource availability",
    C: "Perform Integrated Change Control",
    D: "Team performance assessment",
    Answer: "A"
  },
  {
    #: "73",
    Question: "A project lifecycle is defined as:",
    A: "A collection of generally sequential and sometimes overlapping project phases.",
    B: "A process required to ensure that the project includes all the work required, and only the work required, to complete the project successfully.",
    C: "A recognized standard for the project management profession.",
    D: "The application of knowledge, skills, tools, and techniques to project activities to meet the project requirements.",
    Answer: "A"
  },
  {
    #: "74",
    Question: "The purpose of developing a project scope management plan is to:",
    A: "Manage the timely completion of the project.",
    B: "Ensure that the project includes all of the work required.",
    C: "Make sure the project will satisfy the needs for which it was begun.",
    D: "Reduce the risk of negative events in the project.",
    Answer: "B"
  },
  {
    #: "75",
    Question: "The creation of an internet site to engage stakeholders on a project is an example of which type of communication?",
    A: "Push",
    B: "Pull",
    C: "Interactive",
    D: "Iterative",
    Answer: "B"
  },
  {
    #: "76",
    Question: "An input to the Collect Requirements process is the:",
    A: "Stakeholder register",
    B: "Project management plan",
    C: "Project scope statement",
    D: "Requirements management plan",
    Answer: "A"
  },
  {
    #: "77",
    Question: "Which of the following is a tool or technique used in the Acquire Project Team process?",
    A: "Networking",
    B: "Training",
    C: "Negotiation",
    D: "Issue log",
    Answer: "C"
  },
  {
    #: "78",
    Question: "Which tool or technique is used in the Develop Project Management Plan process?",
    A: "Pareto diagram",
    B: "Performance reporting",
    C: "SWOT analysis",
    D: "Expert judgment",
    Answer: "D"
  },
  {
    #: "79",
    Question: "Technical capability, past performance, and intellectual property rights are examples of:",
    A: "Performance measurement criteria",
    B: "Source selection criteria",
    C: "Product acceptance criteria",
    D: "Phase exit criteria",
    Answer: "B"
  },
  {
    #: "80",
    Question: "Which of the following methods is a project selection technique?",
    A: "Flowcharting",
    B: "Earned value",
    C: "Cost-benefit analysis",
    D: "Pareto analysis",
    Answer: "C"
  },
  {
    #: "81",
    Question: "The business needs, assumptions, and constraints and the understanding of the customers’ needs and high-level requirements are documented in the:",
    A: "Project management plan",
    B: "Project charter",
    C: "Work breakdown structure",
    D: "Stakeholder register",
    Answer: "B"
  },
  {
    #: "82",
    Question: "Which tool or technique is used to develop a project charter?",
    A: "Project manager information systems",
    B: "Expert judgment",
    C: "Change control meetings",
    D: "Brainstorming",
    Answer: "B"
  },
  {
    #: "83",
    Question: "An input required in Define Scope is an organizational:",
    A: "Structure",
    B: "Process asset",
    C: "Matrix",
    D: "Breakdown structure",
    Answer: "B"
  },
  {
    #: "84",
    Question: "Which document in the project management plan can be updated in the Plan Procurement Management process?",
    A: "Budget estimates",
    B: "Risk matrix",
    C: "Requirements documentation",
    D: "Procurement documents",
    Answer: "C"
  },
  {
    #: "85",
    Question: "In which Knowledge Area is the project charter developed?",
    A: "Project Cost Management",
    B: "Project Scope Management",
    C: "Project Time Management",
    D: "Project Integration Management",
    Answer: "D"
  },
  {
    #: "86",
    Question: "Which process is conducted from project inception through completion and is ultimately the responsibility of the project manager?",
    A: "Control Quality",
    B: "Monitor and Control Project Work",
    C: "Control Scope",
    D: "Perform Integrated Change Control",
    Answer: "D"
  },
  {
    #: "87",
    Question: "The Cost Management processes and their associated tools and techniques are usually selected during which of the following?",
    A: "Project finance management",
    B: "Project cost estimation",
    C: "Project life cycle definition",
    D: "Project plan development",
    Answer: "C"
  },
  {
    #: "88",
    Question: "A complete set of concepts, terms, and activities that make up an area of specialization is known as:",
    A: "A Knowledge Area",
    B: "A Process Group",
    C: "Program management",
    D: "Portfolio management",
    Answer: "A"
  },
  {
    #: "89",
    Question: "The product scope description is used to:",
    A: "Gain stakeholders' support for the project.",
    B: "Progressively elaborate the characteristics of the product, service, or result.",
    C: "Describe the project in great detail.",
    D: "Define the process and criteria for accepting a completed product, service, or result.",
    Answer: "B"
  },
  {
    #: "90",
    Question: "Which of the following documents allows the project manager to assess risks that may require near-term action?",
    A: "Probability and impact matrix",
    B: "Contingency analysis report",
    C: "Risk urgency assessment",
    D: "Rolling wave plan",
    Answer: "C"
  },
  {
    #: "91",
    Question: "One of the key benefits of the Plan Human Resource Management process is that it:",
    A: "Outlines team selection guidelines and team member responsibilities.",
    B: "Establishes project roles and responsibilities.",
    C: "Improves teamwork, interpersonal skills, and competencies.",
    D: "Provides an accurate appraisal of team member performance.",
    Answer: "B"
  },
  {
    #: "92",
    Question: "Which process involves defining, preparing, and coordinating all subsidiary plans and integrating them into a comprehensive plan?",
    A: "Direct and Manage Project Work",
    B: "Develop Project Management Plan",
    C: "Plan Quality Management",
    D: "Monitor and Control Project Work",
    Answer: "B"
  },
  {
    #: "93",
    Question: "During project selection, which factor is most important?",
    A: "Types of constraints",
    B: "Internal business needs",
    C: "Budget",
    D: "Schedule",
    Answer: "B"
  },
  {
    #: "94",
    Question: "The specific technique for identifying a problem, discovering the causes that lead to it, and developing preventive actions is:",
    A: "Inspection",
    B: "Use of quality checklists",
    C: "Root cause analysis",
    D: "Use of matrix diagrams",
    Answer: "C"
  },
  {
    #: "95",
    Question: "Projects can be divided into phases to provide better management control. Collectively, what are these phases known as?",
    A: "Complete project phase",
    B: "Project life",
    C: "The project life cycle",
    D: "Project cycle",
    Answer: "C"
  },
  {
    #: "96",
    Question: "Which of the following is used to illustrate the connections between work packages or activities and project team members?",
    A: "Hierarchical-type charts (HTC)",
    B: "Organizational breakdown structure (OBS)",
    C: "Work breakdown structure (WBS)",
    D: "Responsibility assignment matrix (RAM)",
    Answer: "D"
  },
  {
    #: "97",
    Question: "Which tools or techniques are used in the Plan Schedule Management process?",
    A: "Benchmarking, expert judgment, and analytical techniques",
    B: "Statistical sampling, benchmarking, and meetings",
    C: "Negotiations, pre-assignment, and multi-criteria decision analysis",
    D: "Expert judgment, analytical techniques, and meetings",
    Answer: "D"
  },
  {
    #: "98",
    Question: "A regression line is used to estimate:",
    A: "Whether or not a process is stable or has predictable performance.",
    B: "How a change to the independent variable influences the value of the dependent variable.",
    C: "The upper and lower specification limits on a control chart.",
    D: "The central tendency, dispersion, and shape of a statistical distribution.",
    Answer: "B"
  },
  {
    #: "99",
    Question: "Which process involves the creation of a document that provides the project manager with the authority to apply resources to a project?",
    A: "Define Activities",
    B: "Direct and Manage Project Work",
    C: "Develop Project Management Plan",
    D: "Develop Project Charter",
    Answer: "D"
  },
  {
    #: "100",
    Question: "The only Process Group that comprises processes that typically occur from the beginning to the end of the project life cycle is:",
    A: "Planning",
    B: "Executing",
    C: "Monitoring and Controlling",
    D: "Closing",
    Answer: "A"
  },
  {
    #: "101",
    Question: "Which quality planning tools and techniques are used to visually identify logical groupings based on natural relationships?",
    A: "Force field diagrams",
    B: "Cause-and-effect diagrams",
    C: "Affinity diagrams",
    D: "Nominal group techniques",
    Answer: "C"
  },
  {
    #: "102",
    Question: "The following is a network diagram for a project. What is the critical path for the project?",
    A: "A-B-D-G",
    B: "A-B-E-G",
    C: "A-C-F-G",
    D: "A-C-E-G",
    Answer: "C"
  },
  {
    #: "103",
    Question: "Which is used to solicit proposals from prospective sellers?",
    A: "Procurement statement of work",
    B: "Resource calendars",
    C: "Procurement document",
    D: "Independent estimates",
    Answer: "C"
  },
  {
    #: "104",
    Question: "At which stage of the project should certain factors such as the unavailability of human resources due to constraint be considered?",
    A: "Initiation",
    B: "Execution",
    C: "Planning",
    D: "Monitoring and Controlling",
    Answer: "C"
  },
  {
    #: "105",
    Question: "Which Project Time Management process includes bottom-up estimating as a tool or technique?",
    A: "Estimate Activity Resources",
    B: "Sequence Activities",
    C: "Estimate Activity Durations",
    D: "Develop Schedule",
    Answer: "A"
  },
  {
    #: "106",
    Question: "The processes required to establish the scope of the project refine objectives and define the course of action are grouped within which Process Group?",
    A: "Initiating",
    B: "Planning",
    C: "Executing",
    D: "Monitoring and Controlling",
    Answer: "B"
  },
  {
    #: "107",
    Question: "Which piece of information is part of the WBS Dictionary?",
    A: "Responsible organization",
    B: "Change requests",
    C: "Validated deliverables",
    D: "Organizational process assets",
    Answer: "A"
  },
  {
    #: "108",
    Question: "A project in which the scope time and cost are determined early follows which life cycle?",
    A: "Adaptive",
    B: "Predictive",
    C: "Incremental",
    D: "Iterative",
    Answer: "B"
  },
  {
    #: "109",
    Question: "An example of a group decision-making technique is:",
    A: "Nominal group technique",
    B: "Majority",
    C: "Affinity diagram",
    D: "Multi-criteria decision analysis",
    Answer: "B"
  },
  {
    #: "110",
    Question: "A contract management plan is a subsidiary of what other type of plan?",
    A: "Resource plan",
    B: "Project management plan",
    C: "Cost control plan",
    D: "Expected monetary value plan",
    Answer: "B"
  },
  {
    #: "111",
    Question: "In the Define Activities process the schedule management plan is used to:",
    A: "Capture lessons learned",
    B: "Contain standard activity list",
    C: "Document change requests",
    D: "Prescribe level of detail needed",
    Answer: "D"
  },
  {
    #: "112",
    Question: "Which quality tool is useful in understanding and estimating cost of quality?",
    A: "Checksheets",
    B: "Histograms",
    C: "Flowcharts",
    D: "Control charts",
    Answer: "C"
  },
  {
    #: "113",
    Question: "Deliverables completed and checked through Control Quality are known as:",
    A: "Verified deliverables",
    B: "Validated deliverables",
    C: "Acceptance criteria",
    D: "Activity resource requirements",
    Answer: "A"
  },
  {
    #: "114",
    Question: "When does the project team determine which dependencies are discretionary?",
    A: "Before Define Activities",
    B: "During Define Activities",
    C: "Before Sequence Activities",
    D: "During Sequence Activities",
    Answer: "D"
  },
  {
    #: "115",
    Question: "Which Knowledge Area ensures timely generation and distribution of project information?",
    A: "Project Integration Management",
    B: "Project Communications Management",
    C: "PIMS",
    D: "Project Scope Management",
    Answer: "B"
  },
  {
    #: "116",
    Question: "Which are three inputs to the risk register?",
    A: "Risk updates, stakeholder register, quality plan",
    B: "Comm plan, EEFs, duration estimates",
    C: "Risk management plan, cost estimates, project docs",
    D: "Scope statement, OPAs, scope baseline",
    Answer: "C"
  },
  {
    #: "117",
    Question: "Primary benefit of Plan Schedule Management is that it:",
    A: "Identifies schedule challenges",
    B: "Links processes tightly",
    C: "Guides schedule management",
    D: "Creates activity overview",
    Answer: "C"
  },
  {
    #: "118",
    Question: "Which is an input to Control Scope?",
    A: "Project schedule",
    B: "Organizational process assets updates",
    C: "Project document updates",
    D: "Work performance information",
    Answer: "B"
  },
  {
    #: "119",
    Question: "Scope management plan and scope baseline are contained in:",
    A: "Organizational process assets",
    B: "Requirements traceability matrix",
    C: "Project charter",
    D: "Project management plan",
    Answer: "D"
  },
  {
    #: "120",
    Question: "Which Plan Quality tool compares practices to improve performance?",
    A: "Histogram",
    B: "Quality audits",
    C: "Benchmarking",
    D: "Performance analysis",
    Answer: "C"
  },
  {
    #: "121",
    Question: "Risks of excessive decomposition in a WBS?",
    A: "Insufficient funding and disqualification",
    B: "Funding and ineffective resources",
    C: "Disqualification and nonproductive management",
    D: "Nonproductive management and inefficient resources",
    Answer: "D"
  },
  {
    #: "122",
    Question: "Payback period, ROI, IRR, DCF and NPV are examples of:",
    A: "Expert judgment",
    B: "Analytical techniques",
    C: "Earned value management",
    D: "Group decision-making techniques",
    Answer: "B"
  },
  {
    #: "123",
    Question: "Units of measure, precision, accuracy, thresholds, and rules are in the:",
    A: "Cost management plan",
    B: "Work performance information",
    C: "Quality management plan",
    D: "WBS",
    Answer: "A"
  },
  {
    #: "124",
    Question: "When should quality planning be performed?",
    A: "During charter",
    B: "In parallel with planning",
    C: "During risk analysis",
    D: "As a separate step",
    Answer: "B"
  },
  {
    #: "125",
    Question: "Lowest-level WBS planned work is known as:",
    A: "Work packages",
    B: "Accepted deliverables",
    C: "WBS dictionary",
    D: "Scope baseline",
    Answer: "A"
  },
  {
    #: "126",
    Question: "A measure of cost performance that is required to be achieved with remaining resources to meet a management goal is called:",
    A: "Budget at Completion (BAC)",
    B: "Earned Value Management (EVM)",
    C: "To-Complete Performance Index (TCPI)",
    D: "Cost Performance Index (CPI)",
    Answer: "C"
  },
  {
    #: "127",
    Question: "Which process group tracks, reviews, and regulates progress?",
    A: "Planning",
    B: "Executing",
    C: "Monitoring and Controlling",
    D: "Closing",
    Answer: "C"
  },
  {
    #: "128",
    Question: "Which analysis determines cause and degree of difference between baseline and actual performance?",
    A: "Schedule network analysis",
    B: "Reserve analysis",
    C: "Alternative analysis",
    D: "Variance analysis",
    Answer: "D"
  },
  {
    #: "129",
    Question: "The cost performance baseline is typically displayed as:",
    A: "S-curve",
    B: "Normal curve",
    C: "U-curve",
    D: "Positive slope line",
    Answer: "A"
  },
  {
    #: "130",
    Question: "How is quality control performed?",
    A: "By identifying quality standards and determining how to satisfy them",
    B: "By monitoring specific project results and determining corrective actions",
    C: "By ensuring the team is trained in QA",
    D: "By applying Monte Carlo, sampling, Pareto, benchmarking",
    Answer: "B"
  },
  {
    #: "131",
    Question: "An input to Perform Quantitative Risk Analysis is:",
    A: "Quality management plan",
    B: "Project management plan",
    C: "Communications management plan",
    D: "Schedule management plan",
    Answer: "D"
  },
  {
    #: "132",
    Question: "Perform Quality Control is accomplished by:",
    A: "Identifying relevant quality standards",
    B: "Monitoring and recording results to assess performance",
    C: "Ensuring team trained in QA",
    D: "Applying statistical tools for conformance",
    Answer: "B"
  },
  {
    #: "133",
    Question: "Which tool or technique is used in validating project scope?",
    A: "Facilitated workshops",
    B: "Interviews",
    C: "Inspection",
    D: "Meetings",
    Answer: "C"
  },
  {
    #: "134",
    Question: "Which knowledge area ensures timely and appropriate project information management?",
    A: "Project Risk Management",
    B: "Project Integration Management",
    C: "Project Communications Management",
    D: "Project Quality Management",
    Answer: "C"
  },
  {
    #: "135",
    Question: "Which control tool identifies whether a process has predictable performance?",
    A: "Cause and effect diagram",
    B: "Control charts",
    C: "Pareto chart",
    D: "Histogram",
    Answer: "B"
  },
  {
    #: "136",
    Question: "Which tool is used to estimate cost?",
    A: "Budget forecast",
    B: "Variance analysis",
    C: "Activity cost estimate",
    D: "Three-point estimate",
    Answer: "D"
  },
  {
    #: "137",
    Question: "An input to Plan Procurement Management process is:",
    A: "Source selection criteria",
    B: "Market research",
    C: "Stakeholder register",
    D: "Records management system",
    Answer: "C"
  },
  {
    #: "138",
    Question: "Based on a chart, the cost performance index (CPI) for Task 2 is:",
    A: "0.8",
    B: "1",
    C: "1.25",
    D: "45870",
    Answer: "C"
  },
  {
    #: "139",
    Question: "A project team member agrees to a deliverable change with an external stakeholder. This could have been avoided if:",
    A: "Quality assurance",
    B: "Stakeholder management plan",
    C: "Project team building",
    D: "Integrated change control",
    Answer: "D"
  },
  {
    #: "140",
    Question: "Which output from Control Schedule aids in communicating schedule variance or SPI?",
    A: "Performance organizations",
    B: "Schedule baselines",
    C: "Work performance measurements",
    D: "Change requests",
    Answer: "C"
  },
  {
    #: "141",
    Question: "Which term describes assessment of correctness?",
    A: "Accuracy",
    B: "Precision",
    C: "Grade",
    D: "Quality",
    Answer: "A"
  },
  {
    #: "142",
    Question: "A tool used in Perform Qualitative Risk Analysis is:",
    A: "Risk data quality assessment",
    B: "Variance and trend analysis",
    C: "Data gathering techniques",
    D: "Risk audits",
    Answer: "A"
  },
  {
    #: "143",
    Question: "Cost of Quality (COQ) refers to total cost of:",
    A: "All efforts related to quality",
    B: "Product inspection activities",
    C: "Maintain plan quality",
    D: "Perform quality control",
    Answer: "B"
  },
  {
    #: "144",
    Question: "Which is a tool used in monitoring and controlling project work?",
    A: "Work performance information",
    B: "Project management information system (PMIS)",
    C: "Activity duration estimates",
    D: "Scheduled network analysis",
    Answer: "B"
  },
  {
    #: "145",
    Question: "Specification of both deliverables and processes focuses on:",
    A: "Change control",
    B: "Configuration control",
    C: "Project monitoring and control",
    D: "Issue control",
    Answer: "A"
  },
  {
    #: "146",
    Question: "A logical relationship where a successor cannot start until predecessor finishes is:",
    A: "Start-to-start (SS)",
    B: "Start-to-finish (SF)",
    C: "Finish-to-start (FS)",
    D: "Finish-to-finish (FF)",
    Answer: "C"
  },
  {
    #: "147",
    Question: "Tools and techniques used in Close Project or Phase include:",
    A: "Project management information system",
    B: "Product analysis",
    C: "Expert judgment",
    D: "Inspection",
    Answer: "C"
  },
  {
    #: "148",
    Question: "An input to Close Project or Phase is:",
    A: "Accepted deliverables",
    B: "Final products or services",
    C: "Document updates",
    D: "Work performance information",
    Answer: "A"
  },
  {
    #: "149",
    Question: "At project completion, a report detailing the outcome of research on a trend is a:",
    A: "Result",
    B: "Product",
    C: "Service",
    D: "Improvement",
    Answer: "A"
  },
  {
    #: "150",
    Question: "Which conflict resolution technique searches for solutions with some satisfaction for all parties?",
    A: "Force/direct",
    B: "Withdraw/avoid",
    C: "Compromise/reconcile",
    D: "Collaborate/problem solve",
    Answer: "C"
  },
  {
    #: "151",
    Question: "Which tool and technique is used to assess the relationship between two variables?",
    A: "Regression analysis",
    B: "Variance analysis",
    C: "Sensitivity analysis",
    D: "Trend analysis",
    Answer: "A"
  },
  {
    #: "152",
    Question: "Which process identifies risks that might affect the project?",
    A: "Plan Risk Management",
    B: "Identify Risks",
    C: "Perform Qualitative Risk Analysis",
    D: "Perform Quantitative Risk Analysis",
    Answer: "B"
  },
  {
    #: "153",
    Question: "Which document formally authorizes the existence of a project?",
    A: "Project management plan",
    B: "Business case",
    C: "Project charter",
    D: "Scope statement",
    Answer: "C"
  },
  {
    #: "154",
    Question: "Which type of estimate has a range of −25% to +75%?",
    A: "Order of magnitude",
    B: "Budget estimate",
    C: "Definitive estimate",
    D: "Parametric estimate",
    Answer: "A"
  },
  {
    #: "155",
    Question: "Which schedule compression technique adds resources?",
    A: "Fast tracking",
    B: "Crashing",
    C: "Resource leveling",
    D: "Monte Carlo analysis",
    Answer: "B"
  },
  {
    #: "156",
    Question: "Which process includes defining how to conduct risk management activities?",
    A: "Identify Risks",
    B: "Plan Risk Management",
    C: "Perform Qualitative Risk Analysis",
    D: "Plan Risk Responses",
    Answer: "B"
  },
  {
    #: "157",
    Question: "Which estimating technique uses mathematical relationships?",
    A: "Analogous",
    B: "Bottom-up",
    C: "Parametric",
    D: "Expert judgment",
    Answer: "C"
  },
  {
    #: "158",
    Question: "Which document describes how project scope will be defined, validated, and controlled?",
    A: "Scope baseline",
    B: "Requirements documentation",
    C: "Scope management plan",
    D: "WBS dictionary",
    Answer: "C"
  },
  {
    #: "159",
    Question: "Which type of power is based on personal charisma?",
    A: "Formal",
    B: "Expert",
    C: "Referent",
    D: "Coercive",
    Answer: "C"
  },
  {
    #: "160",
    Question: "Which process group consumes the most project budget?",
    A: "Initiating",
    B: "Planning",
    C: "Executing",
    D: "Closing",
    Answer: "C"
  },
  {
    #: "161",
    Question: "Which type of dependency is legally or contractually required?",
    A: "Discretionary",
    B: "External",
    C: "Mandatory",
    D: "Internal",
    Answer: "C"
  },
  {
    #: "162",
    Question: "Which technique is used to evaluate schedule risk?",
    A: "Monte Carlo analysis",
    B: "Decision tree",
    C: "Sensitivity analysis",
    D: "SWOT analysis",
    Answer: "A"
  },
  {
    #: "163",
    Question: "Which process validates completed deliverables with the customer?",
    A: "Control Quality",
    B: "Validate Scope",
    C: "Close Project",
    D: "Verify Scope",
    Answer: "B"
  },
  {
    #: "164",
    Question: "Which tool visually shows dependencies between activities?",
    A: "Histogram",
    B: "Network diagram",
    C: "Pareto chart",
    D: "Control chart",
    Answer: "B"
  },
  {
    #: "165",
    Question: "Which document links requirements to business objectives?",
    A: "Requirements documentation",
    B: "Requirements traceability matrix",
    C: "Scope statement",
    D: "WBS",
    Answer: "B"
  },
  {
    #: "166",
    Question: "Which contract type places the most risk on the seller?",
    A: "Cost reimbursable",
    B: "Time and materials",
    C: "Fixed price",
    D: "Cost plus incentive",
    Answer: "C"
  },
  {
    #: "167",
    Question: "Which process develops options to enhance opportunities and reduce threats?",
    A: "Plan Risk Responses",
    B: "Identify Risks",
    C: "Perform Qualitative Risk Analysis",
    D: "Perform Quantitative Risk Analysis",
    Answer: "A"
  },
  {
    #: "168",
    Question: "Which leadership style focuses on empowering the team?",
    A: "Autocratic",
    B: "Laissez-faire",
    C: "Democratic",
    D: "Transactional",
    Answer: "C"
  },
  {
    #: "169",
    Question: "Which earned value metric shows schedule efficiency?",
    A: "CPI",
    B: "SPI",
    C: "EV",
    D: "PV",
    Answer: "B"
  },
  {
    #: "170",
    Question: "Which tool identifies the vital few causes of defects?",
    A: "Control chart",
    B: "Histogram",
    C: "Pareto chart",
    D: "Run chart",
    Answer: "C"
  },
  {
    #: "171",
    Question: "Which document defines roles and responsibilities?",
    A: "Responsibility assignment matrix",
    B: "Stakeholder register",
    C: "Organization chart",
    D: "Communications plan",
    Answer: "A"
  },
  {
    #: "172",
    Question: "Which conflict resolution technique seeks win-win solutions?",
    A: "Compromise",
    B: "Force",
    C: "Collaborate",
    D: "Withdraw",
    Answer: "C"
  },
  {
    #: "173",
    Question: "Which process determines quality requirements and standards?",
    A: "Plan Quality Management",
    B: "Control Quality",
    C: "Perform Quality Assurance",
    D: "Validate Scope",
    Answer: "A"
  },
  {
    #: "174",
    Question: "Which estimating method is most accurate?",
    A: "Analogous",
    B: "Parametric",
    C: "Bottom-up",
    D: "Three-point",
    Answer: "C"
  },
  {
    #: "175",
    Question: "Which process tracks, reviews, and reports project progress?",
    A: "Executing",
    B: "Monitoring and Controlling",
    C: "Planning",
    D: "Closing",
    Answer: "B"
  },
  {
    #: "176",
    Question: "Which document lists identified risks and responses?",
    A: "Risk management plan",
    B: "Risk register",
    C: "Issue log",
    D: "Assumption log",
    Answer: "B"
  },
  {
    #: "177",
    Question: "Which analysis compares planned vs actual results?",
    A: "Trend analysis",
    B: "Variance analysis",
    C: "Reserve analysis",
    D: "Sensitivity analysis",
    Answer: "B"
  },
  {
    #: "178",
    Question: "Which process ensures work meets quality requirements?",
    A: "Control Quality",
    B: "Plan Quality Management",
    C: "Validate Scope",
    D: "Perform Quality Assurance",
    Answer: "A"
  },
  {
    #: "179",
    Question: "Which organizational structure gives PM the least authority?",
    A: "Functional",
    B: "Weak matrix",
    C: "Balanced matrix",
    D: "Strong matrix",
    Answer: "A"
  },
  {
    #: "180",
    Question: "Which estimate uses optimistic, pessimistic, and most likely values?",
    A: "Analogous",
    B: "Parametric",
    C: "Three-point",
    D: "Bottom-up",
    Answer: "C"
  },
  {
    #: "181",
    Question: "Which tool helps identify stakeholder influence and interest?",
    A: "Power-interest grid",
    B: "RACI chart",
    C: "WBS",
    D: "RAM",
    Answer: "A"
  },
  {
    #: "182",
    Question: "Which document records stakeholder engagement strategies?",
    A: "Stakeholder register",
    B: "Stakeholder management plan",
    C: "Communications plan",
    D: "Issue log",
    Answer: "B"
  },
  {
    #: "183",
    Question: "Which process finalizes all project activities?",
    A: "Validate Scope",
    B: "Close Project or Phase",
    C: "Control Quality",
    D: "Close Procurements",
    Answer: "B"
  },
  {
    #: "184",
    Question: "Which metric measures cost efficiency?",
    A: "SPI",
    B: "EV",
    C: "CPI",
    D: "BAC",
    Answer: "C"
  },
  {
    #: "185",
    Question: "Which process defines how changes will be managed?",
    A: "Develop Project Charter",
    B: "Perform Integrated Change Control",
    C: "Develop Project Management Plan",
    D: "Monitor and Control Project Work",
    Answer: "C"
  },
  {
    #: "186",
    Question: "Which tool visually represents process flow?",
    A: "Histogram",
    B: "Flowchart",
    C: "Control chart",
    D: "Pareto chart",
    Answer: "B"
  },
  {
    #: "187",
    Question: "Which type of risk has a positive impact?",
    A: "Threat",
    B: "Residual",
    C: "Secondary",
    D: "Opportunity",
    Answer: "D"
  },
  {
    #: "188",
    Question: "Which technique prioritizes risks based on probability and impact?",
    A: "Quantitative analysis",
    B: "Sensitivity analysis",
    C: "Qualitative analysis",
    D: "Monte Carlo simulation",
    Answer: "C"
  },
  {
    #: "189",
    Question: "Which document describes how communications will occur?",
    A: "Communications management plan",
    B: "Stakeholder register",
    C: "Project charter",
    D: "Issue log",
    Answer: "A"
  },
  {
    #: "190",
    Question: "Which conflict technique results in lose-lose?",
    A: "Compromise",
    B: "Withdraw",
    C: "Force",
    D: "Avoid",
    Answer: "A"
  },
  {
    #: "191",
    Question: "Which process identifies project stakeholders?",
    A: "Plan Stakeholder Engagement",
    B: "Identify Stakeholders",
    C: "Manage Stakeholder Engagement",
    D: "Control Stakeholder Engagement",
    Answer: "B"
  },
  {
    #: "192",
    Question: "Which estimate is used early in the project?",
    A: "Definitive",
    B: "Budget",
    C: "Order of magnitude",
    D: "Bottom-up",
    Answer: "C"
  },
  {
    #: "193",
    Question: "Which tool compares performance against baselines?",
    A: "Variance analysis",
    B: "Monte Carlo",
    C: "Sensitivity analysis",
    D: "Forecasting",
    Answer: "A"
  },
  {
    #: "194",
    Question: "Which document authorizes resources?",
    A: "Business case",
    B: "Project charter",
    C: "Scope baseline",
    D: "Management plan",
    Answer: "B"
  },
  {
    #: "195",
    Question: "Which process develops project schedule?",
    A: "Sequence Activities",
    B: "Estimate Durations",
    C: "Develop Schedule",
    D: "Control Schedule",
    Answer: "C"
  },
  {
    #: "196",
    Question: "Which risk response strategy reduces probability or impact?",
    A: "Avoid",
    B: "Transfer",
    C: "Mitigate",
    D: "Accept",
    Answer: "C"
  },
  {
    #: "197",
    Question: "Which process ensures deliverables are accepted?",
    A: "Control Quality",
    B: "Validate Scope",
    C: "Close Project",
    D: "Verify Scope",
    Answer: "B"
  },
  {
    #: "198",
    Question: "Which tool estimates schedule uncertainty?",
    A: "Decision tree",
    B: "Monte Carlo analysis",
    C: "Pareto chart",
    D: "Histogram",
    Answer: "B"
  },
  {
    #: "199",
    Question: "Which process monitors stakeholder relationships?",
    A: "Manage Stakeholder Engagement",
    B: "Control Stakeholder Engagement",
    C: "Identify Stakeholders",
    D: "Plan Stakeholder Management",
    Answer: "B"
  },
  {
    #: "200",
    Question: "Which document contains approved scope, schedule, and cost baselines?",
    A: "Project charter",
    B: "Project management plan",
    C: "Scope statement",
    D: "WBS dictionary",
    Answer: "B"
  },
  {
    #: "201",
    Question: "The chart below is an example of a:",
    A: "Responsibility assignment matrix (RAM)",
    B: "Work breakdown structure (WBS)",
    C: "RACI chart",
    D: "Requirements traceability matrix",
    Answer: "D"
  },
  {
    #: "202",
    Question: "Which estimating technique uses actual costs of previous similar projects?",
    A: "Analogous",
    B: "Parametric",
    C: "Bottom-up",
    D: "Top-down",
    Answer: "A"
  },
  {
    #: "203",
    Question: "Which schedule network analysis technique is applied when critical path is calculated and resources are critical?",
    A: "Applying calendars",
    B: "Resource leveling",
    C: "Resource planning",
    D: "Resource conflict management",
    Answer: "B"
  },
  {
    #: "204",
    Question: "Plan-do-check-act is also known as:",
    A: "Prevention over inspection",
    B: "Statistical sampling",
    C: "Management responsibility",
    D: "Continuous improvement",
    Answer: "D"
  },
  {
    #: "205",
    Question: "Which dependency is based on best practices or specific sequence preference?",
    A: "External",
    B: "Internal",
    C: "Mandatory",
    D: "Discretionary",
    Answer: "D"
  },
  {
    #: "206",
    Question: "Cost variance (CV) is equal to earned value:",
    A: "Minus actual cost (EV-AC)",
    B: "Minus planned value (EV-PV)",
    C: "Divided by actual cost (EV/AC)",
    D: "Divided by planned value (EV/PV)",
    Answer: "A"
  },
  {
    #: "207",
    Question: "Which technique helps determine risks with the most potential impact?",
    A: "Cost risk simulation analysis",
    B: "Expected monetary value analysis",
    C: "Modeling and simulation",
    D: "Sensitivity analysis",
    Answer: "D"
  },
  {
    #: "208",
    Question: "A project requires a component with well-understood specifications. Final contract price is based on seller's performance. Which agreement is appropriate?",
    A: "Cost Plus Incentive Fee (CPIF)",
    B: "Fixed Price Incentive Fee (FPIF)",
    C: "Cost Plus Award Fee (CPAF)",
    D: "Fixed Price with Economic Price Adjustment (FP-EPA)",
    Answer: "B"
  },
  {
    #: "209",
    Question: "What is the minimum a project schedule must include?",
    A: "Variance analysis",
    B: "Planned start & finish date for each activity",
    C: "Critical path diagram",
    D: "Critical chain analysis",
    Answer: "B"
  },
  {
    #: "210",
    Question: "Statistical method identifying which factors influence product variables is called:",
    A: "Failure modes and effects analysis",
    B: "Design of experiments",
    C: "Quality checklist",
    D: "Risk analysis",
    Answer: "B"
  },
  {
    #: "211",
    Question: "Which enterprise environmental factors may influence Plan Schedule Management?",
    A: "Cultural views and professional ethics",
    B: "Historical info and change control procedures",
    C: "Risk control procedures and probability/impact matrix",
    D: "Resource availability and organizational culture",
    Answer: "D"
  },
  {
    #: "212",
    Question: "Organizational procedures dictate when project planning:",
    A: "Ends",
    B: "Begins",
    C: "Delays",
    D: "Deviates",
    Answer: "A"
  },
  {
    #: "213",
    Question: "Change requests are an output from which Project Integration Management process?",
    A: "Direct and Manage Project Execution",
    B: "Develop Project Management Plan",
    C: "Close Project",
    D: "Develop Project Charter",
    Answer: "A"
  },
  {
    #: "214",
    Question: "Which Perform Quality Control tool graphically represents system elements interrelation?",
    A: "Control chart",
    B: "Flowchart",
    C: "Run chart",
    D: "Pareto chart",
    Answer: "B"
  },
  {
    #: "215",
    Question: "What happens to a stakeholder's project influence over time?",
    A: "Increases",
    B: "Decreases",
    C: "Stays the same",
    D: "Has no bearing",
    Answer: "B"
  },
  {
    #: "216",
    Question: "A measure of cost performance required to meet a goal with remaining resources is:",
    A: "Budget at Completion (BAC)",
    B: "Earned Value Management (EVM)",
    C: "To-Complete Performance Index (TCPI)",
    D: "Cost Performance Index (CPI)",
    Answer: "C"
  },
  {
    #: "217",
    Question: "The Monitoring and Controlling Process Group includes processes that:",
    A: "Establish scope, objectives, and course of action",
    B: "Define a new project or phase",
    C: "Track, review, and regulate progress",
    D: "Complete work defined in PM plan",
    Answer: "C"
  },
  {
    #: "218",
    Question: "Which analysis determines the cause and degree of difference between baseline and actual performance?",
    A: "Schedule network analysis",
    B: "Reserve analysis",
    C: "Alternative analysis",
    D: "Variance analysis",
    Answer: "D"
  },
  {
    #: "219",
    Question: "The cost performance baseline is typically displayed in the form of:",
    A: "S-curve",
    B: "Normal curve",
    C: "U-curve",
    D: "Positive slope line",
    Answer: "A"
  },
  {
    #: "220",
    Question: "How is quality control performed?",
    A: "By identifying quality standards and determining how to satisfy them",
    B: "By monitoring project results and determining corrective actions",
    C: "By ensuring team trained in QA",
    D: "By applying Monte Carlo, sampling, Pareto, benchmarking",
    Answer: "B"
  },
  {
    #: "221",
    Question: "An input to Perform Quantitative Risk Analysis process is:",
    A: "Quality management plan",
    B: "Project management plan",
    C: "Communications management plan",
    D: "Schedule management plan",
    Answer: "D"
  },
  {
    #: "222",
    Question: "Perform Quality Control is accomplished by:",
    A: "Identifying relevant quality standards",
    B: "Monitoring and recording results to assess performance",
    C: "Ensuring team trained in QA",
    D: "Applying statistical tools to ensure conformance",
    Answer: "B"
  },
  {
    #: "223",
    Question: "Which tool or technique is used in validating project scope?",
    A: "Facilitated workshops",
    B: "Interviews",
    C: "Inspection",
    D: "Meetings",
    Answer: "C"
  },
  {
    #: "224",
    Question: "Which knowledge area ensures timely and appropriate project information management?",
    A: "Project Risk Management",
    B: "Project Integration Management",
    C: "Project Communications Management",
    D: "Project Quality Management",
    Answer: "C"
  },
  {
    #: "225",
    Question: "Which control tool identifies whether a process has predictable performance?",
    A: "Cause and effect diagram",
    B: "Control charts",
    C: "Pareto chart",
    D: "Histogram",
    Answer: "B"
  },
  {
    #: "226",
    Question: "Which of the following tools and techniques is used to estimate cost?",
    A: "Budget forecast",
    B: "Variance analysis",
    C: "Activity cost estimate",
    D: "Three-point estimate",
    Answer: "D"
  },
  {
    #: "227",
    Question: "An input to the Plan Procurement Management process is:",
    A: "Source selection criteria",
    B: "Market research",
    C: "A stakeholder register",
    D: "Records management system",
    Answer: "C"
  },
  {
    #: "228",
    Question: "Based on a chart, what is the cost performance index (CPI) for Task 2?",
    A: "0.8",
    B: "1",
    C: "1.25",
    D: "45870",
    Answer: "C"
  },
  {
    #: "229",
    Question: "A project team member agrees to change a deliverable after a conversation with an external stakeholder. This could have been avoided if the project team had implemented:",
    A: "Quality assurance",
    B: "Stakeholder management plan",
    C: "Project team building",
    D: "Integrated change control",
    Answer: "D"
  },
  {
    #: "230",
    Question: "Which output from the Control Schedule process aids in communication of schedule variance or SPI to stakeholders?",
    A: "Performance organizations",
    B: "Schedule baselines",
    C: "Work performance measurements",
    D: "Change requests",
    Answer: "C"
  },
  {
    #: "231",
    Question: "Which term describes an assessment of correctness?",
    A: "Accuracy",
    B: "Precision",
    C: "Grade",
    D: "Quality",
    Answer: "A"
  },
  {
    #: "232",
    Question: "A tool and technique used during Perform Qualitative Risk Analysis is:",
    A: "Risk data quality assessment",
    B: "Variance and trend analysis",
    C: "Data gathering and representation techniques",
    D: "Risk audits",
    Answer: "A"
  },
  {
    #: "233",
    Question: "Cost of quality (COQ) refers to total cost of/to:",
    A: "All efforts related to quality",
    B: "Product inspection activities",
    C: "Maintain plan quality",
    D: "Perform quality control",
    Answer: "B"
  },
  {
    #: "234",
    Question: "Which is a tool used in monitoring and controlling project work?",
    A: "Work performance information",
    B: "Project management information system (PMIS)",
    C: "Activity duration estimates",
    D: "Scheduled network analysis",
    Answer: "B"
  },
  {
    #: "235",
    Question: "Specification of both the deliverables and processes is the focus of:",
    A: "Change control",
    B: "Configuration control",
    C: "Project monitoring and control",
    D: "Issue control",
    Answer: "A"
  },
  {
    #: "236",
    Question: "A logical relationship in which a successor activity cannot start until a predecessor has finished is:",
    A: "Start-to-start (SS)",
    B: "Start-to-finish (SF)",
    C: "Finish-to-start (FS)",
    D: "Finish-to-finish (FF)",
    Answer: "C"
  },
  {
    #: "237",
    Question: "Which tools/techniques are used in the Close Project or Phase process?",
    A: "Project management information system",
    B: "Product analysis",
    C: "Expert judgment",
    D: "Inspection",
    Answer: "C"
  },
  {
    #: "238",
    Question: "An input to Close Project or Phase is:",
    A: "Accepted deliverables",
    B: "Final products or services",
    C: "Document updates",
    D: "Work performance information",
    Answer: "A"
  },
  {
    #: "239",
    Question: "At the completion of a project, a report detailing research outcomes is created. This item is called:",
    A: "Result",
    B: "Product",
    C: "Service",
    D: "Improvement",
    Answer: "A"
  },
  {
    #: "240",
    Question: "Which conflict resolution technique searches for solutions bringing some satisfaction to all parties temporarily?",
    A: "Force/direct",
    B: "Withdraw/avoid",
    C: "Compromise/reconcile",
    D: "Collaborate/problem solve",
    Answer: "C"
  },
  {
    #: "241",
    Question: "Which statistical concept calculates the average outcome when the future includes scenarios that may or may not happen?",
    A: "Sensitivity analysis",
    B: "Three-point estimate",
    C: "Modeling and simulation",
    D: "Expected monetary value analysis",
    Answer: "D"
  },
  {
    #: "242",
    Question: "When is a project finished?",
    A: "After verbal acceptance of the customer/sponsor",
    B: "After lessons learned documented",
    C: "When project objectives have been met",
    D: "After resources released",
    Answer: "C"
  },
  {
    #: "243",
    Question: "The process of formalizing acceptance of completed deliverables is known as:",
    A: "Validate Scope",
    B: "Close Project or Phase",
    C: "Control Quality",
    D: "Verify Scope",
    Answer: "A"
  },
  {
    #: "244",
    Question: "Those who enter a contractual agreement to provide project services are:",
    A: "Buyers",
    B: "Sellers",
    C: "Business partners",
    D: "Product users",
    Answer: "B"
  },
  {
    #: "245",
    Question: "Lessons learned are created and resources released in which Process Group?",
    A: "Planning",
    B: "Executing",
    C: "Closing",
    D: "Initiating",
    Answer: "C"
  },
  {
    #: "246",
    Question: "A project has a CPI of 1.25 and US$10,000 spent. What is the earned value?",
    A: "US$5000",
    B: "US$9500",
    C: "US$10,000",
    D: "US$12,500",
    Answer: "D"
  },
  {
    #: "247",
    Question: "Updates to organizational process assets such as procurement files, deliverable acceptances, lessons learned are outputs of:",
    A: "Close Project or Phase",
    B: "Conduct Procurements",
    C: "Control Procurements",
    D: "Close Procurements",
    Answer: "D"
  },
  {
    #: "248",
    Question: "When alternative dispute resolution (ADR) is necessary, which tool/technique is used?",
    A: "Interactive communication",
    B: "Claims administration",
    C: "Conflict management",
    D: "Performance reporting",
    Answer: "B"
  },
  {
    #: "249",
    Question: "What do composite organizations involve?",
    A: "Functional and project managers",
    B: "Functional managers only",
    C: "Project managers only",
    D: "Technical managers and project managers",
    Answer: "A"
  },
  {
    #: "250",
    Question: "The individual/group that provides resources and support and is accountable for project success is:",
    A: "Sponsor",
    B: "Customer",
    C: "Business partners",
    D: "Functional managers",
    Answer: "A"
  },
  {
    #: "251",
    Question: "An example of a group decision-making technique is:",
    A: "Nominal group technique",
    B: "Majority",
    C: "Affinity diagram",
    D: "Multi-criteria decision analysis",
    Answer: "A"
  },
  {
    #: "252",
    Question: "Which Knowledge Areas include processes from the Closing Process Group?",
    A: "Project Quality & Time Management",
    B: "Project Scope & Risk Management",
    C: "Project Stakeholder & Cost Management",
    D: "Project Integration & Procurement Management",
    Answer: "D"
  },
  {
    #: "253",
    Question: "Which conflict resolution technique emphasizes areas of agreement rather than differences?",
    A: "Compromising",
    B: "Collaborating",
    C: "Smoothing",
    D: "Problem Solving",
    Answer: "C"
  },
  {
    #: "254",
    Question: "An output of the Close Project (or Close Phase) process is:",
    A: "Accepted deliverables",
    B: "Organizational process asset updates",
    C: "Work performance information",
    D: "Project management plan updates",
    Answer: "B"
  },
  {
    #: "255",
    Question: "In a weak matrix, the project manager’s role is:",
    A: "Part-time",
    B: "Full-time",
    C: "Occasional",
    D: "Unlimited",
    Answer: "A"
  },
  {
    #: "256",
    Question: "Which degree of authority does a project manager have in a strong matrix organizational structure?",
    A: "Limited",
    B: "Low to moderate",
    C: "Moderate to high",
    D: "High to almost total",
    Answer: "C"
  },
  {
    #: "257",
    Question: "Which of the following is an output of Close Procurements?",
    A: "Accepted deliverables",
    B: "Organizational process assets updates",
    C: "Managing stakeholder expectations",
    D: "Performance reports",
    Answer: "B"
  },
  {
    #: "258",
    Question: "The links between the processes in the Process Groups are often:",
    A: "Intuitive",
    B: "Iterative",
    C: "Measured",
    D: "Monitored",
    Answer: "B"
  },
  {
    #: "259",
    Question: "A project manager builds consensus and overcomes obstacles by employing which communication technique?",
    A: "Listening",
    B: "Facilitation",
    C: "Meeting management",
    D: "Presentation",
    Answer: "B"
  },
  {
    #: "260",
    Question: "Which estimating technique uses values from previous similar projects for estimating the same parameter for a current project?",
    A: "Reserve analysis",
    B: "Three-point estimating",
    C: "Parametric estimating",
    D: "Analogous estimating",
    Answer: "D"
  },
  {
    #: "261",
    Question: "The person assigned by the performing organization to be responsible for achieving the project objectives is the:",
    A: "Functional manager",
    B: "Program manager",
    C: "Project manager",
    D: "Portfolio manager",
    Answer: "C"
  },
  {
    #: "262",
    Question: "What is the number of stakeholders if the project has 28 potential communication channels?",
    A: "7",
    B: "8",
    C: "14",
    D: "16",
    Answer: "B"
  },
  {
    #: "263",
    Question: "Which technique should a project manager use when a collaborative approach to conflict management is not possible?",
    A: "Coaching",
    B: "Avoidance",
    C: "Consensus",
    D: "Influencing",
    Answer: "B"
  },
  {
    #: "264",
    Question: "Lessons learned documentation is gathered during which Project Management Process Group?",
    A: "Planning",
    B: "Executing",
    C: "Closing",
    D: "Initiating",
    Answer: "C"
  },
  {
    #: "265",
    Question: "The process for performing variance analysis may vary depending on:",
    A: "Scenario building, technology forecasting, and forecast by analogy",
    B: "Working relationships among stakeholders and team members",
    C: "Application area, standard used, and industry",
    D: "Work to be completed next",
    Answer: "C"
  },
  {
    #: "266",
    Question: "Which process documents the business needs of a project and the new product, service, or result intended to satisfy those requirements?",
    A: "Develop Project Management Plan",
    B: "Develop Project Charter",
    C: "Direct and Manage Project Execution",
    D: "Collect Requirements",
    Answer: "B"
  },
  {
    #: "267",
    Question: "Which is the correct formula for calculating expected activity cost for three-point estimating?",
    A: "Ce = (C0 + 6Cm + Cp)/4",
    B: "Ce = (6C0 + Cm + Cp)/4",
    C: "Ce = (C0 + 4Cm + Cp)/6",
    D: "Ce = (C0 + Cm + 4Cp)/6",
    Answer: "C"
  },
  {
    #: "268",
    Question: "In which Process Group are lessons learned documented?",
    A: "Planning",
    B: "Closing",
    C: "Executing",
    D: "Initiating",
    Answer: "B"
  },
  {
    #: "269",
    Question: "Exhibit A is an example of which type of Sequence Activities?",
    A: "Activity-on-arrow diagramming",
    B: "Precedence diagramming",
    C: "Project schedule network diagramming",
    D: "Mathematical analysis diagramming",
    Answer: "B"
  },
  {
    #: "270",
    Question: "The cost benefit analysis tool is used for creating:",
    A: "Pareto charts",
    B: "Quality metrics",
    C: "Change requests",
    D: "Ishikawa diagrams",
    Answer: "B"
  },
  {
    #: "271",
    Question: "What type of reward can hurt team cohesiveness?",
    A: "Sole-sum",
    B: "Win-lose",
    C: "Lose-win",
    D: "Partial-sum",
    Answer: "B"
  },
  {
    #: "272",
    Question: "Which of the following is a complete set of indexed contract documentation, including the closed contract?",
    A: "Procurement package",
    B: "Negotiated settlements",
    C: "Procurement file",
    D: "Procurement management plan",
    Answer: "C"
  },
  {
    #: "273",
    Question: "The process of identifying and documenting relationships among project activities is known as:",
    A: "Control Schedule",
    B: "Sequence Activities",
    C: "Define Activities",
    D: "Develop Schedule",
    Answer: "B"
  },
  {
    #: "274",
    Question: "Which activity may occur at project or phase closure?",
    A: "Acceptance of deliverables",
    B: "Change requests",
    C: "Project management plan updates",
    D: "Benchmarking",
    Answer: "A"
  },
  {
    #: "275",
    Question: "Which enterprise environmental factors may influence Plan Schedule Management?",
    A: "Cultural views on time and ethics",
    B: "Historical info & change control procedures",
    C: "Risk control procedures & probability-impact matrix",
    D: "Resource availability & org culture and structure",
    Answer: "D"
  },
  {
    #: "276",
    Question: "While processes in the Planning Process Group seek to collect feedback and define project documents to guide project work, organizational procedures dictate when project planning:",
    A: "Ends",
    B: "Begins",
    C: "Delays",
    D: "Deviates",
    Answer: "A"
  },
  {
    #: "277",
    Question: "Change requests are an output from which Project Integration Management process?",
    A: "Direct and Manage Project Execution",
    B: "Develop Project Management Plan",
    C: "Close Project",
    D: "Develop Project Charter",
    Answer: "A"
  },
  {
    #: "278",
    Question: "Which Perform Quality Control tool graphically represents how various elements of a system interrelate?",
    A: "Control chart",
    B: "Flowchart",
    C: "Run chart",
    D: "Pareto chart",
    Answer: "B"
  },
  {
    #: "279",
    Question: "What happens to a stakeholder's project influence over time?",
    A: "Increases",
    B: "Decreases",
    C: "Stays the same",
    D: "Has no bearing",
    Answer: "B"
  },
  {
    #: "280",
    Question: "A measure of cost performance that is required to be achieved with the remaining resources to meet a specified goal is known as the:",
    A: "Budget at Completion (BAC)",
    B: "Earned Value Management (EVM)",
    C: "To-Complete Performance Index (TCPI)",
    D: "Cost Performance Index (CPI)",
    Answer: "C"
  },
  {
    #: "281",
    Question: "The Monitoring and Controlling Process Group includes processes that:",
    A: "Establish the scope, objectives, and course of action of a project",
    B: "Define a new project or phase",
    C: "Track, review, and regulate project progress and performance",
    D: "Complete the work defined in the project management plan",
    Answer: "C"
  },
  {
    #: "282",
    Question: "Which type of analysis is used to determine the cause and degree of difference between the baseline and actual performance?",
    A: "Schedule network analysis",
    B: "Reserve analysis",
    C: "Alternative analysis",
    D: "Variance analysis",
    Answer: "D"
  },
  {
    #: "283",
    Question: "The cost performance baseline is typically displayed in the form of:",
    A: "An S-curve",
    B: "A normal curve",
    C: "A U-curve",
    D: "A positive slope line",
    Answer: "A"
  },
  {
    #: "284",
    Question: "How is quality control performed?",
    A: "By identifying quality standards and determining how to satisfy them",
    B: "By monitoring specific project results and determining corrective actions",
    C: "By ensuring project team is trained in QA processes",
    D: "By applying Monte Carlo, sampling, Pareto analysis, benchmarking",
    Answer: "B"
  },
  {
    #: "285",
    Question: "An input to the Perform Quantitative Risk Analysis process is the:",
    A: "Quality management plan",
    B: "Project management plan",
    C: "Communications management plan",
    D: "Schedule management plan",
    Answer: "D"
  },
  {
    #: "286",
    Question: "Perform Quality Control is accomplished by:",
    A: "Identifying quality standards and determining how to satisfy them",
    B: "Monitoring and recording results to assess performance and recommend changes",
    C: "Ensuring the team is trained in QA processes",
    D: "Applying Monte Carlo, sampling, Pareto analysis, benchmarking",
    Answer: "B"
  },
  {
    #: "287",
    Question: "Which tool or technique is used in validating the scope of a project?",
    A: "Facilitated workshops",
    B: "Interviews",
    C: "Inspection",
    D: "Meetings",
    Answer: "C"
  },
  {
    #: "288",
    Question: "Which knowledge area employs processes required to ensure timely and appropriate generation, collection, distribution, storage, retrieval, and disposition of project information?",
    A: "Project Risk Management",
    B: "Project Integration Management",
    C: "Project Communications Management",
    D: "Project Quality Management",
    Answer: "C"
  },
  {
    #: "289",
    Question: "Which type of control tool identifies whether a process has predictable performance?",
    A: "Cause and effect diagram",
    B: "Control Charts",
    C: "Pareto Chart",
    D: "Histogram",
    Answer: "B"
  },
  {
    #: "290",
    Question: "Which of the following tools and techniques is used to estimate cost?",
    A: "Budget forecast",
    B: "Variance analysis",
    C: "Activity cost estimate",
    D: "Three-point estimate",
    Answer: "D"
  },
  {
    #: "291",
    Question: "An input to the Plan Procurement Management process is:",
    A: "Source selection criteria",
    B: "Market research",
    C: "A stakeholder register",
    D: "A records management system",
    Answer: "C"
  },
  {
    #: "292",
    Question: "Based on a project chart, what is the cost performance index (CPI) for Task 2?",
    A: "0.8",
    B: "1",
    C: "1.25",
    D: "45870",
    Answer: "C"
  },
  {
    #: "293",
    Question: "A project team member agrees to change a project deliverable after a conversation with an external stakeholder. This could have been avoided if the project team had implemented:",
    A: "Quality assurance",
    B: "Stakeholder management plan",
    C: "Project team building",
    D: "Integrated change control",
    Answer: "D"
  },
  {
    #: "294",
    Question: "Which of the following outputs from the Control Schedule process aids in communicating schedule variance, SPI, or performance status to stakeholders?",
    A: "Performance organizations",
    B: "Schedule baselines",
    C: "Work performance measurements",
    D: "Change requests",
    Answer: "C"
  },
  {
    #: "295",
    Question: "Which term describes an assessment of correctness?",
    A: "Accuracy",
    B: "Precision",
    C: "Grade",
    D: "Quality",
    Answer: "A"
  },
  {
    #: "296",
    Question: "A tool and technique used during the Perform Qualitative Risk Analysis process is:",
    A: "Risk data quality assessment",
    B: "Variance and trend analysis",
    C: "Data gathering and representation techniques",
    D: "Risk audits",
    Answer: "A"
  },
  {
    #: "297",
    Question: "Cost of quality (COQ) refers to total cost of/to:",
    A: "All efforts related to quality",
    B: "Product inspection activities",
    C: "Maintain plan quality",
    D: "Perform quality control",
    Answer: "B"
  },
  {
    #: "298",
    Question: "Which is a tool used in monitoring and controlling project work?",
    A: "Work performance information",
    B: "Project management information system (PMIS)",
    C: "Activity duration estimates",
    D: "Scheduled network analysis",
    Answer: "B"
  },
  {
    #: "299",
    Question: "Specification of both the deliverables and the processes is the focus of:",
    A: "Change control",
    B: "Configuration control",
    C: "Project monitoring and control",
    D: "Issue control",
    Answer: "A"
  },
  {
    #: "300",
    Question: "A logical relationship in which a successor activity cannot start until a predecessor activity has finished is known as:",
    A: "Start-to-start (SS)",
    B: "Start-to-finish (SF)",
    C: "Finish-to-start (FS)",
    D: "Finish-to-finish (FF)",
    Answer: "C"
  },
  {
    #: "301",
    Question: "Which of the following tools and techniques are utilized in the Close Project or Phase process?",
    A: "Project management information system",
    B: "Product analysis",
    C: "Expert judgment",
    D: "Inspection",
    Answer: "C"
  },
  {
    #: "302",
    Question: "An input to Close Project or Phase is:",
    A: "Accepted deliverables",
    B: "Final products or services",
    C: "Document updates",
    D: "Work performance information",
    Answer: "A"
  },
  {
    #: "303",
    Question: "At the completion of a project, a report is prepared detailing the outcome of research conducted on a global trend during the project. Which item did this project create?",
    A: "Result",
    B: "Product",
    C: "Service",
    D: "Improvement",
    Answer: "A"
  },
  {
    #: "304",
    Question: "Which conflict resolution technique searches for solutions that bring some satisfaction to all parties to temporarily or partially resolve the conflict?",
    A: "Force/direct",
    B: "Withdraw/avoid",
    C: "Compromise/reconcile",
    D: "Collaborate/problem solve",
    Answer: "C"
  },
  {
    #: "305",
    Question: "Which statistical concept calculates the average outcome when the future includes scenarios that may or may not happen?",
    A: "Sensitivity analysis",
    B: "Three-point estimate",
    C: "Modeling and simulation",
    D: "Expected monetary value analysis",
    Answer: "D"
  },
  {
    #: "306",
    Question: "When is a project finished?",
    A: "After verbal acceptance of the customer or sponsor",
    B: "After lessons learned have been documented in contract closure",
    C: "When the project objectives have been met",
    D: "After resources have been released",
    Answer: "C"
  },
  {
    #: "307",
    Question: "The process of formalizing acceptance of the completed project deliverables is known as:",
    A: "Validate Scope",
    B: "Close Project or Phase",
    C: "Control Quality",
    D: "Verify Scope",
    Answer: "A"
  },
  {
    #: "308",
    Question: "Those who enter into a contractual agreement to provide services necessary for a project are:",
    A: "Buyers",
    B: "Sellers",
    C: "Business partners",
    D: "Product users",
    Answer: "B"
  },
  {
    #: "309",
    Question: "Lessons learned are created and project resources are released in which Process Group?",
    A: "Planning",
    B: "Executing",
    C: "Closing",
    D: "Initiating",
    Answer: "C"
  },
  {
    #: "310",
    Question: "A project has a current cost performance index (CPI) of 1.25. To date, US$10,000 have been spent. What is the earned value of the work completed?",
    A: "US$5000",
    B: "US$9500",
    C: "US$10,000",
    D: "US$12,500",
    Answer: "D"
  },
  {
    #: "311",
    Question: "Updates to organizational process assets such as procurement files, deliverable acceptances, and lessons learned documentation are typical outputs of which process?",
    A: "Close Project or Phase",
    B: "Conduct Procurements",
    C: "Control Procurements",
    D: "Close Procurements",
    Answer: "D"
  },
  {
    #: "312",
    Question: "When alternative dispute resolution (ADR) is necessary, which tool or technique should be utilized?",
    A: "Interactive communication",
    B: "Claims administration",
    C: "Conflict management",
    D: "Performance reporting",
    Answer: "B"
  },
  {
    #: "313",
    Question: "What do composite organizations involve?",
    A: "Functional and project managers",
    B: "Functional managers only",
    C: "Project managers only",
    D: "Technical managers and project managers",
    Answer: "A"
  },
  {
    #: "314",
    Question: "The individual or group that provides resources and support for a project and is accountable for success is the:",
    A: "Sponsor",
    B: "Customer",
    C: "Business partners",
    D: "Functional managers",
    Answer: "A"
  },
  {
    #: "315",
    Question: "An example of a group decision-making technique is:",
    A: "Nominal group technique",
    B: "Majority",
    C: "Affinity diagram",
    D: "Multi-criteria decision analysis",
    Answer: "A"
  },
  {
    #: "316",
    Question: "Which Knowledge Areas include processes from the Closing Process Group?",
    A: "Project Quality Management and Project Time Management",
    B: "Project Scope Management and Project Risk Management",
    C: "Project Stakeholder Management and Project Cost Management",
    D: "Project Integration Management and Project Procurement Management",
    Answer: "D"
  },
  {
    #: "317",
    Question: "Which of the following is a conflict resolution technique that emphasizes areas of agreement rather than areas of difference?",
    A: "Compromising",
    B: "Collaborating",
    C: "Smoothing",
    D: "Problem Solving",
    Answer: "C"
  },
  {
    #: "318",
    Question: "An output of the Close Project (or Close Phase) process is:",
    A: "Accepted deliverables",
    B: "Organizational process asset updates",
    C: "Work performance information",
    D: "Project management plan updates",
    Answer: "B"
  },
  {
    #: "319",
    Question: "In a weak matrix, the project manager's role is:",
    A: "Part-time",
    B: "Full-time",
    C: "Occasional",
    D: "Unlimited",
    Answer: "A"
  },
  {
    #: "320",
    Question: "Which degree of authority does a project manager have on a project in a strong matrix organizational structure?",
    A: "Limited",
    B: "Low to moderate",
    C: "Moderate to high",
    D: "High to almost total",
    Answer: "C"
  },
  {
    #: "321",
    Question: "Which of the following is an output of Close Procurements?",
    A: "Accepted deliverables",
    B: "Organizational process assets updates",
    C: "Managing stakeholder expectations",
    D: "Performance reports",
    Answer: "B"
  },
  {
    #: "322",
    Question: "The links between the processes in the Process Groups are often:",
    A: "Intuitive",
    B: "Iterative",
    C: "Measured",
    D: "Monitored",
    Answer: "B"
  },
  {
    #: "323",
    Question: "A project manager builds consensus and overcomes obstacles by employing which communication technique?",
    A: "Listening",
    B: "Facilitation",
    C: "Meeting management",
    D: "Presentation",
    Answer: "B"
  },
  {
    #: "324",
    Question: "Which of the following is an estimating technique that uses the values of parameters from previous similar projects for estimating the same parameter for a current project?",
    A: "Reserve analysis",
    B: "Three-point estimating",
    C: "Parametric estimating",
    D: "Analogous estimating",
    Answer: "D"
  },
  {
    #: "325",
    Question: "The person assigned by the performing organization to be responsible for achieving the project objectives is the:",
    A: "Functional manager",
    B: "Program manager",
    C: "Project manager",
    D: "Portfolio manager",
    Answer: "C"
  },
  {
    #: "326",
    Question: "Which is a tool used in monitoring and controlling project work?",
    A: "Work performance information",
    B: "Project management information system (PMIS)",
    C: "Activity duration estimates",
    D: "Scheduled network analysis",
    Answer: "B"
  },
  {
    #: "327",
    Question: "Specification of both the deliverables and the processes is the focus of:",
    A: "Change control",
    B: "Configuration control",
    C: "Project monitoring and control",
    D: "Issue control",
    Answer: "A"
  },
  {
    #: "328",
    Question: "A logical relationship in which a successor activity cannot start until a predecessor activity has finished is known as:",
    A: "Start-to-start (SS)",
    B: "Start-to-finish (SF)",
    C: "Finish-to-start (FS)",
    D: "Finish-to-finish (FF)",
    Answer: "C"
  },
  {
    #: "329",
    Question: "Which of the following tools and techniques are utilized in the Close Project or Phase process?",
    A: "Project management information system",
    B: "Product analysis",
    C: "Expert judgment",
    D: "Inspection",
    Answer: "C"
  },
  {
    #: "330",
    Question: "An input to Close Project or Phase is:",
    A: "Accepted deliverables",
    B: "Final products or services",
    C: "Document updates",
    D: "Work performance information",
    Answer: "A"
  },
  {
    #: "331",
    Question: "At the completion of a project, a report is prepared detailing the outcome of research conducted on a global trend during the project. Which item did this project create?",
    A: "Result",
    B: "Product",
    C: "Service",
    D: "Improvement",
    Answer: "A"
  },
  {
    #: "332",
    Question: "Which conflict resolution technique searches for solutions that bring some satisfaction to all parties to temporarily or partially resolve the conflict?",
    A: "Force/direct",
    B: "Withdraw/avoid",
    C: "Compromise/reconcile",
    D: "Collaborate/problem solve",
    Answer: "C"
  },
  {
    #: "333",
    Question: "Which statistical concept calculates the average outcome when the future includes scenarios that may or may not happen?",
    A: "Sensitivity analysis",
    B: "Three-point estimate",
    C: "Modeling and simulation",
    D: "Expected monetary value analysis",
    Answer: "D"
  },
  {
    #: "334",
    Question: "When is a project finished?",
    A: "After verbal acceptance of the customer or sponsor",
    B: "After lessons learned have been documented in contract closure",
    C: "When the project objectives have been met",
    D: "After resources have been released",
    Answer: "C"
  },
  {
    #: "335",
    Question: "The process of formalizing acceptance of the completed project deliverables is known as:",
    A: "Validate Scope",
    B: "Close Project or Phase",
    C: "Control Quality",
    D: "Verify Scope",
    Answer: "A"
  },
  {
    #: "336",
    Question: "Those who enter into a contractual agreement to provide services necessary for a project are:",
    A: "Buyers",
    B: "Sellers",
    C: "Business partners",
    D: "Product users",
    Answer: "B"
  },
  {
    #: "337",
    Question: "Lessons learned are created and project resources are released in which Process Group?",
    A: "Planning",
    B: "Executing",
    C: "Closing",
    D: "Initiating",
    Answer: "C"
  },
  {
    #: "338",
    Question: "A project has a current cost performance index (CPI) of 1.25. To date, US$10,000 have been spent. What is the earned value of the work completed?",
    A: "US$5000",
    B: "US$9500",
    C: "US$10,000",
    D: "US$12,500",
    Answer: "D"
  },
  {
    #: "339",
    Question: "Updates to organizational process assets such as procurement files, deliverable acceptances, and lessons learned documentation are typical outputs of which process?",
    A: "Close Project or Phase",
    B: "Conduct Procurements",
    C: "Control Procurements",
    D: "Close Procurements",
    Answer: "D"
  },
  {
    #: "340",
    Question: "When alternative dispute resolution (ADR) is necessary, which tool or technique should be utilized?",
    A: "Interactive communication",
    B: "Claims administration",
    C: "Conflict management",
    D: "Performance reporting",
    Answer: "B"
  },
  {
    #: "341",
    Question: "What do composite organizations involve?",
    A: "Functional and project managers",
    B: "Functional managers only",
    C: "Project managers only",
    D: "Technical managers and project managers",
    Answer: "A"
  },
  {
    #: "342",
    Question: "The individual or group that provides resources and support for a project and is accountable for success is the:",
    A: "Sponsor",
    B: "Customer",
    C: "Business partners",
    D: "Functional managers",
    Answer: "A"
  },
  {
    #: "343",
    Question: "An example of a group decision-making technique is:",
    A: "Nominal group technique",
    B: "Majority",
    C: "Affinity diagram",
    D: "Multi-criteria decision analysis",
    Answer: "A"
  },
  {
    #: "344",
    Question: "Which Knowledge Areas include processes from the Closing Process Group?",
    A: "Project Quality Management and Project Time Management",
    B: "Project Scope Management and Project Risk Management",
    C: "Project Stakeholder Management and Project Cost Management",
    D: "Project Integration Management and Project Procurement Management",
    Answer: "D"
  },
  {
    #: "345",
    Question: "Which of the following is a conflict resolution technique that emphasizes areas of agreement rather than areas of difference?",
    A: "Compromising",
    B: "Collaborating",
    C: "Smoothing",
    D: "Problem Solving",
    Answer: "C"
  },
  {
    #: "346",
    Question: "An output of the Close Project (or Close Phase) process is:",
    A: "Accepted deliverables",
    B: "Organizational process asset updates",
    C: "Work performance information",
    D: "Project management plan updates",
    Answer: "B"
  },
  {
    #: "347",
    Question: "In a weak matrix, the project manager's role is:",
    A: "Part-time",
    B: "Full-time",
    C: "Occasional",
    D: "Unlimited",
    Answer: "A"
  },
  {
    #: "348",
    Question: "Which degree of authority does a project manager have on a project in a strong matrix organizational structure?",
    A: "Limited",
    B: "Low to moderate",
    C: "Moderate to high",
    D: "High to almost total",
    Answer: "C"
  },
  {
    #: "349",
    Question: "Which of the following is an output of Close Procurements?",
    A: "Accepted deliverables",
    B: "Organizational process assets updates",
    C: "Managing stakeholder expectations",
    D: "Performance reports",
    Answer: "B"
  },
  {
    #: "350",
    Question: "The links between the processes in the Process Groups are often:",
    A: "Intuitive",
    B: "Iterative",
    C: "Measured",
    D: "Monitored",
    Answer: "B"
  },
  {
    #: "351",
    Question: "A project manager builds consensus and overcomes obstacles by employing which communication technique?",
    A: "Listening",
    B: "Facilitation",
    C: "Meeting management",
    D: "Presentation",
    Answer: "B"
  },
  {
    #: "352",
    Question: "Which of the following is an estimating technique that uses the values of parameters from previous similar projects for estimating the same parameter or measure for a current project?",
    A: "Reserve analysis",
    B: "Three-point estimating",
    C: "Parametric estimating",
    D: "Analogous estimating",
    Answer: "D"
  },
  {
    #: "353",
    Question: "The person assigned by the performing organization to be responsible for achieving the project objectives is the:",
    A: "Functional manager",
    B: "Program manager",
    C: "Project manager",
    D: "Portfolio manager",
    Answer: "C"
  },
  {
    #: "354",
    Question: "What is the number of stakeholders, if the project has 28 potential communication channels?",
    A: "7",
    B: "8",
    C: "14",
    D: "16",
    Answer: "B"
  },
  {
    #: "355",
    Question: "Which technique should a project manager use in a situation in which a collaborative approach to conflict management is not possible?",
    A: "Coaching",
    B: "Avoidance",
    C: "Consensus",
    D: "Influencing",
    Answer: "B"
  },
  {
    #: "356",
    Question: "Lessons learned documentation is gathered during which of the following Project Management Process Groups?",
    A: "Planning",
    B: "Executing",
    C: "Closing",
    D: "Initiating",
    Answer: "C"
  },
  {
    #: "357",
    Question: "The process for performing variance analysis may vary, depending on:",
    A: "Scenario building, technology forecasting, and forecast by analogy",
    B: "Working relationships among various stakeholders and team members",
    C: "Application area, the standard used, and the industry",
    D: "Work to be completed next",
    Answer: "C"
  },
  {
    #: "358",
    Question: "Which process documents the business needs of a project and the new product, service, or other result that is intended to satisfy those requirements?",
    A: "Develop Project Management Plan",
    B: "Develop Project Charter",
    C: "Direct and Manage Project Execution",
    D: "Collect Requirements",
    Answer: "B"
  },
  {
    #: "359",
    Question: "Which is the correct formula for calculating expected activity cost for three-point estimating?",
    A: "Ce = (C0 + 6Cm + Cp)/4",
    B: "Ce = (6C0 + Cm + Cp)/4",
    C: "Ce = (C0 + 4Cm + Cp)/6",
    D: "Ce = (C0 + Cm + 4Cp)/6",
    Answer: "C"
  },
  {
    #: "360",
    Question: "In which Process Group are lessons learned documented?",
    A: "Planning",
    B: "Closing",
    C: "Executing",
    D: "Initiating",
    Answer: "B"
  },
  {
    #: "361",
    Question: "Exhibit A is an example of which of the following types of Sequence Activities?",
    A: "Activity-on-arrow diagramming",
    B: "Precedence diagramming",
    C: "Project schedule network diagramming",
    D: "Mathematical analysis diagramming",
    Answer: "B"
  },
  {
    #: "362",
    Question: "The cost benefit analysis tool is used for creating:",
    A: "Pareto charts",
    B: "Quality metrics",
    C: "Change requests",
    D: "Ishikawa diagrams",
    Answer: "B"
  },
  {
    #: "363",
    Question: "What type of reward can hurt team cohesiveness?",
    A: "Sole-sum",
    B: "Win-lose",
    C: "Lose-win",
    D: "Partial-sum",
    Answer: "B"
  },
  {
    #: "364",
    Question: "Which of the following is a complete set of indexed contract documentation, including the closed contract?",
    A: "Procurement package",
    B: "Negotiated settlements",
    C: "Procurement file",
    D: "Procurement management plan",
    Answer: "C"
  },
  {
    #: "365",
    Question: "The process of identifying and documenting relationships among the project activities is known as:",
    A: "Control Schedule",
    B: "Sequence Activities",
    C: "Define Activities",
    D: "Develop Schedule",
    Answer: "B"
  },
  {
    #: "366",
    Question: "Which activity may occur at project or phase closure?",
    A: "Acceptance of deliverables",
    B: "Change requests",
    C: "Project management plan updates",
    D: "Benchmarking",
    Answer: "A"
  }
];
];
