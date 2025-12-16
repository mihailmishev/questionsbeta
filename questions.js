const questions = [
  {
    q: 'Which process determines the risks that might affect the project?',
    options: ['Perform Qualitative Risk Analysis', 'Identify Risks', 'Plan Risk Management', 'Perform Quantitative Risk Analysis'],
    answer: 'Identify Risks',
    img: null
  },
  {
    q: 'In the Plan Stakeholder Management process, expert judgment is used to:',
    options: ['Provide information needed to plan appropriate ways to engage project stakeholders.', 'Ensure comprehensive identification and listing of new stakeholders.', 'Analyze the information needed to develop the project scope statement.', 'Decide the level of engagement of the stakeholders at each required stage.'],
    answer: 'Decide the level of engagement of the stakeholders at each required stage.',
    img: null
  },
  {
    q: 'Plan Risk Management is the process of defining how to:',
    options: ['Communicate identified risks to the project stakeholders.', 'Conduct risk management activities for a project.', 'Analyze the impact a specific risk may have on the project.', 'Address unexpected risks that may occur during a project.'],
    answer: 'Conduct risk management activities for a project.',
    img: null
  },
  {
    q: 'Which of the following forecasting methods uses historical data as the basis for estimating future outcomes?',
    options: ['Time series', 'Judgmental', 'Econometric', 'Simulation'],
    answer: 'Time series',
    img: null
  },
  {
    q: 'Which process is included in the Project Integration Management Knowledge Area?',
    options: ['Manage Project Team', 'Collect Requirements', 'Sequence Activities', 'Direct and Manage Project Work'],
    answer: 'Direct and Manage Project Work',
    img: null
  },
  {
    q: 'Every project creates a unique product, service, or result that may be:',
    options: ['tangible', 'targeted', 'organized', 'variable'],
    answer: 'tangible',
    img: null
  },
  {
    q: 'Which of the following is an example of a risk symptom?',
    options: ['Failure to meet intermediate milestones', 'Force of nature, such as a flood', 'Risk threshold target', 'Crashing, front loading, or fast tracking'],
    answer: 'Failure to meet intermediate milestones',
    img: null
  },
  {
    q: 'A project can be defined as a:',
    options: ['Temporary endeavor undertaken to create a unique product, service, or result', 'Temporary endeavor that produces repetitive outputs', 'Permanent endeavor undertaken to create a unique product, service, or result', 'Permanent endeavor that produces repetitive outputs'],
    answer: 'Temporary endeavor undertaken to create a unique product, service, or result',
    img: null
  },
  {
    q: 'Which is the document that presents a hierarchical project organization?',
    options: ['WBS', 'CPI', 'OBS', 'BOM'],
    answer: 'OBS',
    img: null
  },
  {
    q: 'Project managers who lead by example and follow through on the commitments they make demonstrate the key interpersonal skill of:',
    options: ['influencing', 'leadership', 'motivation', 'coaching'],
    answer: 'influencing',
    img: null
  },
  {
    q: 'The project governance approach should be described in the:',
    options: ['change control plan', 'project scope', 'statement of work', 'project management plan'],
    answer: 'project management plan',
    img: null
  },
  {
    q: 'Which process includes prioritizing risks for subsequent further analysis or action by assessing and combining their probability of occurrence and impact?',
    options: ['Perform Qualitative Risk Analysis', 'Perform Quantitative Risk Analysis', 'Plan Risk Management', 'Plan Risk Responses'],
    answer: 'Perform Qualitative Risk Analysis',
    img: null
  },
  {
    q: 'A tool and technique used during the Define Scope process is:',
    options: ['facilitated workshops.', 'observations.', 'questionnaires and surveys.', 'group creativity techniques.'],
    answer: 'facilitated workshops.',
    img: null
  },
  {
    q: 'Which type of managers do composite organizations involve?',
    options: ['Functional managers and manager of project managers', 'Functional managers only', 'Project managers only', 'Technical managers and project managers'],
    answer: 'Functional managers and manager of project managers',
    img: null
  },
  {
    q: 'What name(s) is (are) associated with the Plan-Do-Check-Act cycle?',
    options: ['Pareto', 'Ishikawa', 'Shewhart-Deming', 'Delphi'],
    answer: 'Shewhart-Deming',
    img: null
  },
  {
    q: 'Which of the following strategies is used to deal with risks that may have a negative impact on project objectives?',
    options: ['Exploit', 'Share', 'Enhance', 'Transfer'],
    answer: 'Transfer',
    img: null
  },
  {
    q: 'A primary function of a project management office is to support project managers in a variety of ways, including which of the following?',
    options: ['Developing and managing project policies, procedures, templates, and other shared documentation', 'Acting as the project sponsor by providing financial resources to the project', 'Resolving issues and change management within a shared governance structure', 'Aligning organizational/strategic direction that affects project and program goals'],
    answer: 'Developing and managing project policies, procedures, templates, and other shared documentation',
    img: null
  },
  {
    q: 'Who selects the appropriate processes for a project?',
    options: ['Project stakeholders', 'Project sponsor and project stakeholder', 'Project manager and project team', 'Project manager and project sponsor'],
    answer: 'Project manager and project team',
    img: null
  },
  {
    q: 'Which of the following is an input to the Qualitative Risk Analysis process?',
    options: ['Risk register', 'Risk data quality assessment', 'Risk categorization', 'Risk urgency'],
    answer: 'Risk register',
    img: null
  },
  {
    q: 'Skills necessary for project management such as motivating to provide encouragement; listening actively; persuading a team to perform an action; and summarizing, recapping, and identifying next steps are known as:',
    options: ['organizational skills', 'technical skills', 'communication skills', 'hard skills'],
    answer: 'communication skills',
    img: null
  },
  {
    q: 'The Identify Stakeholders process is found in which Process Group?',
    options: ['Initiating', 'Monitoring and Controlling', 'Planning', 'Executing'],
    answer: 'Initiating',
    img: null
  },
  {
    q: 'The component of the human resource management plan that includes ways in which team members can obtain certifications that support their ability to benefit the project is known as:',
    options: ['recognition and rewards', 'compliance', 'staff acquisition', 'training needs'],
    answer: 'training needs',
    img: null
  },
  {
    q: 'What tool and technique is used to determine whether work and deliverables meet requirements and product acceptance criteria?',
    options: ['Decomposition', 'Benchmarking', 'Inspection', 'Checklist analysis'],
    answer: 'Inspection',
    img: null
  },
  {
    q: 'In which process is a project manager identified and given the authority to apply resources to project activities?',
    options: ['Acquire Project Team', 'Develop Project Management Plan', 'Manage Project Execution', 'Develop Project Charter'],
    answer: 'Develop Project Charter',
    img: null
  },
  {
    q: 'Project contracts generally fall into which of the following three broad categories?',
    options: ['Fixed-price, cost reimbursable, time and materials', 'Make-or-buy, margin analysis, fixed-price', 'Time and materials, fixed-price, margin analysis', 'Make-or-buy, lump-sum, cost-plus-incentive'],
    answer: 'Fixed-price, cost reimbursable, time and materials',
    img: null
  },
  {
    q: 'Which of the following helps to ensure that each requirement adds business value by linking it to the business and project objectives?',
    options: ['Requirements traceability matrix', 'Work breakdown structure (WBS) dictionary', 'Requirements management plan', 'Requirements documentation'],
    answer: 'Requirements traceability matrix',
    img: null
  },
  {
    q: 'A tool and technique used during the Collect Requirements process is:',
    options: ['prototypes.', 'expert judgment.', 'alternatives identification.', 'product analysis.'],
    answer: 'prototypes.',
    img: null
  },
  {
    q: 'The stakeholder register is an output of:',
    options: ['Identify Stakeholders.', 'Plan Stakeholder Management.', 'Control Stakeholder Engagement.', 'Manage Stakeholder Engagement.'],
    answer: 'Identify Stakeholders.',
    img: null
  },
  {
    q: 'An issue log is an input to which Project Human Resource Management process?',
    options: ['Manage Project Team', 'Acquire Project Team', 'Plan Human Resource Management', 'Develop Project Team'],
    answer: 'Manage Project Team',
    img: null
  },
  {
    q: "Plan Communications Management develops an approach and plan for project communications based on stakeholders' needs and requirements and:",
    options: ['Available organizational assets', 'Project staff assignments', 'Interpersonal skills', 'Enterprise environmental factors'],
    answer: 'Available organizational assets',
    img: null
  },
  {
    q: 'The product scope description is used to:',
    options: ['Gain stakeholders support for the project.', 'Document the characteristics of the product.', 'Describe the project in great detail.', 'Formally authorize the project.'],
    answer: 'Document the characteristics of the product.',
    img: null
  },
  {
    q: 'A Project Management Office (PMO) manages a number of aspects, including what?',
    options: ['Project scope, schedule, cost, and quality of the products of the work packages', 'Central coordinator of communication management across projects, and for the delivery of specific project objectives, organization opportunity assessment', 'Assigns project resources to best meet project objectives', 'Overall risk, overall opportunity and interdependencies among projects'],
    answer: 'Overall risk, overall opportunity and interdependencies among projects',
    img: null
  },
  {
    q: 'Which Process Group contains those processes performed to define a new project?',
    options: ['Initiating', 'Planning', 'Executing', 'Closing'],
    answer: 'Initiating',
    img: null
  },
  {
    q: 'Soft logic is also known as what type of dependency?',
    options: ['External', 'Discretionary', 'Mandatory', 'Internal'],
    answer: 'Discretionary',
    img: null
  },
  {
    q: 'Which process uses occurrence probability and impact on project objectives to assess the priority of identified risks?',
    options: ['Identify Risks', 'Perform Qualitative Risk Analysis', 'Plan Risk Management', 'Perform Quantitative Risk Analysis'],
    answer: 'Perform Qualitative Risk Analysis',
    img: null
  },
  {
    q: 'Which of the following is a strategy to deal with positive risks or opportunities?',
    options: ['Mitigate', 'Transfer', 'Exploit', 'Avoid'],
    answer: 'Exploit',
    img: null
  },
  {
    q: 'Which type of risk diagram is useful for showing time ordering of events?',
    options: ['Ishikawa', 'Milestone', 'Influence', 'Decision tree'],
    answer: 'Influence',
    img: null
  },
  {
    q: 'Which of the following correctly explains the term "progressive elaboration"?',
    options: ['Changing project specifications continuously', 'Elaborate tracking of the project progress', 'Elaborate tracking of the project specifications with a change control system', 'Project specifications becoming more explicit and detailed as the project progresses'],
    answer: 'Project specifications becoming more explicit and detailed as the project progresses',
    img: null
  },
  {
    q: 'Which characteristics do effective project managers possess?',
    options: ['Project management knowledge, performance skills, and personal effectiveness', 'Preparedness, project management knowledge, and personality characteristics', 'General management, preparedness, and project management knowledge', 'Assertiveness, collaboration, and performance skills'],
    answer: 'Project management knowledge, performance skills, and personal effectiveness',
    img: null
  },
  {
    q: 'Which process numerically analyzes the effect of identified risks on overall project objectives?',
    options: ['Plan Risk Management', 'Plan Risk Responses', 'Perform Quantitative Risk Analysis', 'Perform Qualitative Risk Analysis'],
    answer: 'Perform Quantitative Risk Analysis',
    img: null
  },
  {
    q: 'Which is an output of the Collect Requirements process?',
    options: ['Requirements traceability matrix', 'Project scope statement', 'WBS dictionary', 'Work performance measurements'],
    answer: 'Requirements traceability matrix',
    img: null
  },
  {
    q: 'What type of project structure is a hierarchically organized depiction of the resources by type?',
    options: ['Organizational breakdown structure (OBS)', 'Resource breakdown structure (RBS)', 'Work breakdown structure (WBS)', 'Project breakdown structure (PBS)'],
    answer: 'Resource breakdown structure (RBS)',
    img: null
  },
  {
    q: 'A stakeholder expresses a need not known to the project manager. The project manager most likely missed a step in which stakeholder management process?',
    options: ['Plan Stakeholder Management', 'Identify Stakeholders', 'Manage Stakeholder Engagement', 'Control Stakeholder Engagement'],
    answer: 'Identify Stakeholders',
    img: null
  },
  {
    q: 'Stakeholders can be identified in later stages of the project because the Identify Stakeholders process should be?',
    options: ['Continuous', 'Discrete', 'Regulated', 'Arbitrary'],
    answer: 'Continuous',
    img: null
  },
  {
    q: 'Prioritizing risks for further analysis or action by assessing and combining their probability of occurrence and impact takes place in which process?',
    options: ['Monitor and Control Risks', 'Plan Risk Management', 'Perform Qualitative Risk Analysis', 'Perform Quantitative Risk Analysis'],
    answer: 'Perform Qualitative Risk Analysis',
    img: null
  },
  {
    q: 'Which of the following is an output of the Distribute Information process?',
    options: ['Project calendar', 'Communications management plan', 'Organizational process assets updates', 'Project document updates'],
    answer: 'Organizational process assets updates',
    img: null
  },
  {
    q: 'Which statement is true about the project management body of knowledge?',
    options: ['Recognized by every project manager', 'Constantly evolving', 'The sum of all knowledge related to project management', 'A sum of knowledge that should be applied on every project'],
    answer: 'Constantly evolving',
    img: null
  },
  {
    q: 'An output of the Develop Project Team process is?',
    options: ['Change requests', 'Team performance assessments', 'Project staff assignments', 'Project documents updates'],
    answer: 'Team performance assessments',
    img: null
  },
  {
    q: 'Risk exists the moment that a project is?',
    options: ['Planned', 'Conceived', 'Chartered', 'Executed'],
    answer: 'Conceived',
    img: null
  },
  {
    q: 'Which standard has interrelationships to other project management disciplines such as program management and portfolio management?',
    options: ['Program Management Body of Knowledge Guide', 'The Standard for Program Management', 'Organizational Project Management Maturity Model (OPM3$)', 'Guide to the Project Management Body of Knowledge (PMBOK®)'],
    answer: 'Guide to the Project Management Body of Knowledge (PMBOK®)',
    img: null
  },
  {
    q: 'Which technique is commonly used for the Perform Quantitative Risk Analysis process?',
    options: ['Brainstorming', 'Strategies for opportunities', 'Decision tree analysis', 'Risk data quality assessment'],
    answer: 'Decision tree analysis',
    img: null
  },
  {
    q: 'Activity resource requirements and resource breakdown structure are outputs from what Project Time Management process?',
    options: ['Schedule Control', 'Activity Definition', 'Schedule Development', 'Activity Resource Estimating'],
    answer: 'Activity Resource Estimating',
    img: null
  },
  {
    q: 'Most experienced project managers know that:',
    options: ['Every project requires the use of all processes in the PMBOK® Guide.', 'There is no single way to manage a project.', 'Project management techniques are risk free.', 'There is only one way to manage projects successfully.'],
    answer: 'There is no single way to manage a project.',
    img: null
  },
  {
    q: 'Which input to Collect Requirements is used to identify stakeholders who can provide information on requirements?',
    options: ['Stakeholder register', 'Scope management plan', 'Stakeholder management plan', 'Project charter'],
    answer: 'Stakeholder register',
    img: null
  },
  {
    q: 'When addressing roles and responsibilities, which item ensures that the staff has the skills required to complete project activities?',
    options: ['Authority', 'Role', 'Competency', 'Responsibility'],
    answer: 'Competency',
    img: null
  },
  {
    q: 'Which of the following statements best describes the influence of stakeholders and the cost of changes as project time advances?',
    options: ['The influence of the stakeholders increases, the cost of changes increases.', 'The influence of the stakeholders decreases, the cost of changes increases.', 'The influence of the stakeholders increases, the cost of changes decreases.', 'The influence of the stakeholders decreases, the cost of changes decreases.'],
    answer: 'The influence of the stakeholders decreases, the cost of changes increases.',
    img: null
  },
  {
    q: 'The probability and impact matrix is primarily used to:',
    options: ['Quantify risk issues for trends during a quality audit.', 'Develop a risk register for risk planning.', 'Evaluate each risk’s importance and priority during Perform Qualitative Risk Analysis.', 'Define risk and compare impacts during Perform Quantitative Risk Analysis.'],
    answer: 'Evaluate each risk’s importance and priority during Perform Qualitative Risk Analysis.',
    img: null
  },
  {
    q: 'What is one of the objectives of Project Risk Management?',
    options: ['Decrease the probability and impact of an event on project objectives.', 'Distinguish between a project risk and a project issue so that a risk mitigation plan can be put in place.', 'Increase the probability and impact of positive events.', 'Removal of project risk.'],
    answer: 'Increase the probability and impact of positive events.',
    img: null
  },
  {
    q: 'The project scope statement and resource calendars are inputs to which Project Time Management process?',
    options: ['Sequence Activities', 'Estimate Activity Resources', 'Develop Schedule', 'Control Schedule'],
    answer: 'Develop Schedule',
    img: null
  },
  {
    q: 'Which group creativity technique asks a selected group of experts to answer questionnaires and provide feedback regarding the responses from each round of requirements gathering?',
    options: ['The Delphi technique', 'Nominal group technique', 'Affinity diagram', 'Brainstorming'],
    answer: 'The Delphi technique',
    img: null
  },
  {
    q: 'A project’s purpose or justification, measurable project objectives and related success criteria, a summary milestone schedule, and a summary budget are all components of which document?',
    options: ['Work breakdown structure', 'Requirements document', 'Project charter', 'Project management plan'],
    answer: 'Project charter',
    img: null
  },
  {
    q: 'The process of defining how the project scope will be validated and controlled is known as:',
    options: ['Define Scope', 'Develop Project Management Plan', 'Plan Scope Management', 'Plan Quality Management'],
    answer: 'Plan Scope Management',
    img: null
  },
  {
    q: 'Inputs to Identifying Stakeholders include:',
    options: ['Project charter, procurement documents, enterprise environmental factors, and organizational process assets.', 'Project charter, stakeholder analysis, enterprise environmental factors, and organizational process assets.', 'Project charter, stakeholder analysis, enterprise environmental factors, and stakeholder management strategy.', 'Project charter, procurement documents, expert judgment, and organizational process assets.'],
    answer: 'Project charter, procurement documents, enterprise environmental factors, and organizational process assets.',
    img: null
  },
  {
    q: 'Which of the following terms indicates a deliverable-oriented hierarchical decomposition of the project work?',
    options: ['WBS directory', 'Activity list', 'WBS', 'Project schedule'],
    answer: 'WBS',
    img: null
  },
  {
    q: 'One of the objectives of a quality audit is to:',
    options: ['Highlight the need for root cause analysis.', 'Share the process documentation among stakeholders.', 'Offer assistance with non-value-added activities.', 'Identify all of the gaps or shortcomings.'],
    answer: 'Identify all of the gaps or shortcomings.',
    img: null
  },
  {
    q: 'What is project management?',
    options: ['A logical grouping of project management inputs, outputs, tools, and techniques', 'Applying knowledge, skills, tools, and techniques to project activities to meet the project requirements', 'Launching a process that can result in the authorization of a new project', 'A formal, approved document that defines how the project is executed, monitored, and controlled'],
    answer: 'Applying knowledge, skills, tools, and techniques to project activities to meet the project requirements',
    img: null
  },
  {
    q: 'What is Project Portfolio Management?',
    options: ['Management of a project by dividing the project into more manageable sub-projects.', 'Management of a project by utilizing a portfolio of general management skills, such as planning, organizing, staffing, executing and controlling.', 'Management of all projects undertaken by a company.', 'Management of a collection of projects that are grouped together to facilitate effective management and meet strategic business objectives.'],
    answer: 'Management of a collection of projects that are grouped together to facilitate effective management and meet strategic business objectives.',
    img: null
  },
  {
    q: 'Which activity is an input to the select sellers process?',
    options: ['Organizational process assets', 'Resource availability', 'Change control process', 'Team performance assessment'],
    answer: 'Organizational process assets',
    img: null
  },
  {
    q: 'For any given project, the project manager, in collaboration with the project team, is responsible for:',
    options: ['Applying knowledge, skills, and processes uniformly.', 'Informing the project sponsor about which processes are going to be used.', 'Tailoring the processes to fit the abilities of the organization.', 'Determining which particular processes are appropriate.'],
    answer: 'Determining which particular processes are appropriate.',
    img: null
  },
  {
    q: 'Which type of contract is a hybrid of both a cost-reimbursable and a fixed-price contract?',
    options: ['Cost Plus Award Fee Contract (CPAF)', 'Firm-Fixed -Price Contract (FFP)', 'Time and Material Contract (T&M)', 'Cost Plus Incentive Fee Contract (CPIF)'],
    answer: 'Time and Material Contract (T&M)',
    img: null
  },
  {
    q: 'The process of prioritizing risks for further analysis or action is known as:',
    options: ['Plan Risk Management', 'Plan Risk Responses', 'Perform Qualitative Risk Analysis', 'Perform Quantitative Risk Analysis'],
    answer: 'Perform Qualitative Risk Analysis',
    img: null
  },
  {
    q: 'Which activity is an input to the Conduct Procurements process?',
    options: ['Organizational process assets', 'Resource availability', 'Perform Integrated Change Control', 'Team performance assessment'],
    answer: 'Organizational process assets',
    img: null
  },
  {
    q: 'A project lifecycle is defined as:',
    options: ['A collection of generally sequential and sometimes overlapping project phases.', 'A process required to ensure that the project includes all the work required, and only the work required, to complete the project successfully.', 'A recognized standard for the project management profession.', 'The application of knowledge, skills, tools, and techniques to project activities to meet the project requirements.'],
    answer: 'A collection of generally sequential and sometimes overlapping project phases.',
    img: null
  },
  {
    q: 'The purpose of developing a project scope management plan is to:',
    options: ['Manage the timely completion of the project.', 'Ensure that the project includes all of the work required.', 'Make sure the project will satisfy the needs for which it was begun.', 'Reduce the risk of negative events in the project.'],
    answer: 'Ensure that the project includes all of the work required.',
    img: null
  },
  {
    q: 'The creation of an internet site to engage stakeholders on a project is an example of which type of communication?',
    options: ['Push', 'Pull', 'Interactive', 'Iterative'],
    answer: 'Pull',
    img: null
  },
  {
    q: 'An input to the Collect Requirements process is the:',
    options: ['Stakeholder register', 'Project management plan', 'Project scope statement', 'Requirements management plan'],
    answer: 'Stakeholder register',
    img: null
  },
  {
    q: 'Which of the following is a tool or technique used in the Acquire Project Team process?',
    options: ['Networking', 'Training', 'Negotiation', 'Issue log'],
    answer: 'Negotiation',
    img: null
  },
  {
    q: 'Which tool or technique is used in the Develop Project Management Plan process?',
    options: ['Pareto diagram', 'Performance reporting', 'SWOT analysis', 'Expert judgment'],
    answer: 'Expert judgment',
    img: null
  },
  {
    q: 'Technical capability, past performance, and intellectual property rights are examples of:',
    options: ['Performance measurement criteria', 'Source selection criteria', 'Product acceptance criteria', 'Phase exit criteria'],
    answer: 'Source selection criteria',
    img: null
  },
  {
    q: 'Which of the following methods is a project selection technique?',
    options: ['Flowcharting', 'Earned value', 'Cost-benefit analysis', 'Pareto analysis'],
    answer: 'Cost-benefit analysis',
    img: null
  },
  {
    q: 'The business needs, assumptions, and constraints and the understanding of the customers’ needs and high-level requirements are documented in the:',
    options: ['Project management plan', 'Project charter', 'Work breakdown structure', 'Stakeholder register'],
    answer: 'Project charter',
    img: null
  },
  {
    q: 'Which tool or technique is used to develop a project charter?',
    options: ['Project manager information systems', 'Expert judgment', 'Change control meetings', 'Brainstorming'],
    answer: 'Expert judgment',
    img: null
  },
  {
    q: 'An input required in Define Scope is an organizational:',
    options: ['Structure', 'Process asset', 'Matrix', 'Breakdown structure'],
    answer: 'Process asset',
    img: null
  },
  {
    q: 'Which document in the project management plan can be updated in the Plan Procurement Management process?',
    options: ['Budget estimates', 'Risk matrix', 'Requirements documentation', 'Procurement documents'],
    answer: 'Requirements documentation',
    img: null
  },
  {
    q: 'In which Knowledge Area is the project charter developed?',
    options: ['Project Cost Management', 'Project Scope Management', 'Project Time Management', 'Project Integration Management'],
    answer: 'Project Integration Management',
    img: null
  },
  {
    q: 'Which process is conducted from project inception through completion and is ultimately the responsibility of the project manager?',
    options: ['Control Quality', 'Monitor and Control Project Work', 'Control Scope', 'Perform Integrated Change Control'],
    answer: 'Perform Integrated Change Control',
    img: null
  },
  {
    q: 'The Cost Management processes and their associated tools and techniques are usually selected during which of the following?',
    options: ['Project finance management', 'Project cost estimation', 'Project life cycle definition', 'Project plan development'],
    answer: 'Project life cycle definition',
    img: null
  },
  {
    q: 'A complete set of concepts, terms, and activities that make up an area of specialization is known as:',
    options: ['A Knowledge Area', 'A Process Group', 'Program management', 'Portfolio management'],
    answer: 'A Knowledge Area',
    img: null
  },
  {
    q: 'The product scope description is used to:',
    options: ["Gain stakeholders' support for the project.", 'Progressively elaborate the characteristics of the product, service, or result.', 'Describe the project in great detail.', 'Define the process and criteria for accepting a completed product, service, or result.'],
    answer: 'Progressively elaborate the characteristics of the product, service, or result.',
    img: null
  },
  {
    q: 'Which of the following documents allows the project manager to assess risks that may require near-term action?',
    options: ['Probability and impact matrix', 'Contingency analysis report', 'Risk urgency assessment', 'Rolling wave plan'],
    answer: 'Risk urgency assessment',
    img: null
  },
  {
    q: 'One of the key benefits of the Plan Human Resource Management process is that it:',
    options: ['Outlines team selection guidelines and team member responsibilities.', 'Establishes project roles and responsibilities.', 'Improves teamwork, interpersonal skills, and competencies.', 'Provides an accurate appraisal of team member performance.'],
    answer: 'Establishes project roles and responsibilities.',
    img: null
  },
  {
    q: 'Which process involves defining, preparing, and coordinating all subsidiary plans and integrating them into a comprehensive plan?',
    options: ['Direct and Manage Project Work', 'Develop Project Management Plan', 'Plan Quality Management', 'Monitor and Control Project Work'],
    answer: 'Develop Project Management Plan',
    img: null
  },
  {
    q: 'During project selection, which factor is most important?',
    options: ['Types of constraints', 'Internal business needs', 'Budget', 'Schedule'],
    answer: 'Internal business needs',
    img: null
  },
  {
    q: 'The specific technique for identifying a problem, discovering the causes that lead to it, and developing preventive actions is:',
    options: ['Inspection', 'Use of quality checklists', 'Root cause analysis', 'Use of matrix diagrams'],
    answer: 'Root cause analysis',
    img: null
  },
  {
    q: 'Projects can be divided into phases to provide better management control. Collectively, what are these phases known as?',
    options: ['Complete project phase', 'Project life', 'The project life cycle', 'Project cycle'],
    answer: 'The project life cycle',
    img: null
  },
  {
    q: 'Which of the following is used to illustrate the connections between work packages or activities and project team members?',
    options: ['Hierarchical-type charts (HTC)', 'Organizational breakdown structure (OBS)', 'Work breakdown structure (WBS)', 'Responsibility assignment matrix (RAM)'],
    answer: 'Responsibility assignment matrix (RAM)',
    img: null
  },
  {
    q: 'Which tools or techniques are used in the Plan Schedule Management process?',
    options: ['Benchmarking, expert judgment, and analytical techniques', 'Statistical sampling, benchmarking, and meetings', 'Negotiations, pre-assignment, and multi-criteria decision analysis', 'Expert judgment, analytical techniques, and meetings'],
    answer: 'Expert judgment, analytical techniques, and meetings',
    img: null
  },
  {
    q: 'A regression line is used to estimate:',
    options: ['Whether or not a process is stable or has predictable performance.', 'How a change to the independent variable influences the value of the dependent variable.', 'The upper and lower specification limits on a control chart.', 'The central tendency, dispersion, and shape of a statistical distribution.'],
    answer: 'How a change to the independent variable influences the value of the dependent variable.',
    img: null
  },
  {
    q: 'Which process involves the creation of a document that provides the project manager with the authority to apply resources to a project?',
    options: ['Define Activities', 'Direct and Manage Project Work', 'Develop Project Management Plan', 'Develop Project Charter'],
    answer: 'Develop Project Charter',
    img: null
  },
  {
    q: 'The only Process Group that comprises processes that typically occur from the beginning to the end of the project life cycle is:',
    options: ['Planning', 'Executing', 'Monitoring and Controlling', 'Closing'],
    answer: 'Planning',
    img: null
  },
  {
    q: 'Which quality planning tools and techniques are used to visually identify logical groupings based on natural relationships?',
    options: ['Force field diagrams', 'Cause-and-effect diagrams', 'Affinity diagrams', 'Nominal group techniques'],
    answer: 'Affinity diagrams',
    img: null
  },
  {
    q: 'The following is a network diagram for a project. What is the critical path for the project?',
    options: ['A-B-D-G', 'A-B-E-G', 'A-C-F-G', 'A-C-E-G'],
    answer: 'A-C-F-G',
    img: null
  },
  {
    q: 'Which is used to solicit proposals from prospective sellers?',
    options: ['Procurement statement of work', 'Resource calendars', 'Procurement document', 'Independent estimates'],
    answer: 'Procurement document',
    img: null
  },
  {
    q: 'At which stage of the project should certain factors such as the unavailability of human resources due to constraint be considered?',
    options: ['Initiation', 'Execution', 'Planning', 'Monitoring and Controlling'],
    answer: 'Planning',
    img: null
  },
  {
    q: 'Which Project Time Management process includes bottom-up estimating as a tool or technique?',
    options: ['Estimate Activity Resources', 'Sequence Activities', 'Estimate Activity Durations', 'Develop Schedule'],
    answer: 'Estimate Activity Resources',
    img: null
  },
  {
    q: 'The processes required to establish the scope of the project refine objectives and define the course of action are grouped within which Process Group?',
    options: ['Initiating', 'Planning', 'Executing', 'Monitoring and Controlling'],
    answer: 'Planning',
    img: null
  },
  {
    q: 'Which piece of information is part of the WBS Dictionary?',
    options: ['Responsible organization', 'Change requests', 'Validated deliverables', 'Organizational process assets'],
    answer: 'Responsible organization',
    img: null
  },
  {
    q: 'A project in which the scope time and cost are determined early follows which life cycle?',
    options: ['Adaptive', 'Predictive', 'Incremental', 'Iterative'],
    answer: 'Predictive',
    img: null
  },
  {
    q: 'An example of a group decision-making technique is:',
    options: ['Nominal group technique', 'Majority', 'Affinity diagram', 'Multi-criteria decision analysis'],
    answer: 'Majority',
    img: null
  },
  {
    q: 'A contract management plan is a subsidiary of what other type of plan?',
    options: ['Resource plan', 'Project management plan', 'Cost control plan', 'Expected monetary value plan'],
    answer: 'Project management plan',
    img: null
  },
  {
    q: 'In the Define Activities process the schedule management plan is used to:',
    options: ['Capture lessons learned', 'Contain standard activity list', 'Document change requests', 'Prescribe level of detail needed'],
    answer: 'Prescribe level of detail needed',
    img: null
  },
  {
    q: 'Which quality tool is useful in understanding and estimating cost of quality?',
    options: ['Checksheets', 'Histograms', 'Flowcharts', 'Control charts'],
    answer: 'Flowcharts',
    img: null
  },
  {
    q: 'Deliverables completed and checked through Control Quality are known as:',
    options: ['Verified deliverables', 'Validated deliverables', 'Acceptance criteria', 'Activity resource requirements'],
    answer: 'Verified deliverables',
    img: null
  },
  {
    q: 'When does the project team determine which dependencies are discretionary?',
    options: ['Before Define Activities', 'During Define Activities', 'Before Sequence Activities', 'During Sequence Activities'],
    answer: 'During Sequence Activities',
    img: null
  },
  {
    q: 'Which Knowledge Area ensures timely generation and distribution of project information?',
    options: ['Project Integration Management', 'Project Communications Management', 'PIMS', 'Project Scope Management'],
    answer: 'Project Communications Management',
    img: null
  },
  {
    q: 'Which are three inputs to the risk register?',
    options: ['Risk updates, stakeholder register, quality plan', 'Comm plan, EEFs, duration estimates', 'Risk management plan, cost estimates, project docs', 'Scope statement, OPAs, scope baseline'],
    answer: 'Risk management plan, cost estimates, project docs',
    img: null
  },
  {
    q: 'Primary benefit of Plan Schedule Management is that it:',
    options: ['Identifies schedule challenges', 'Links processes tightly', 'Guides schedule management', 'Creates activity overview'],
    answer: 'Guides schedule management',
    img: null
  },
  {
    q: 'Which is an input to Control Scope?',
    options: ['Project schedule', 'Organizational process assets updates', 'Project document updates', 'Work performance information'],
    answer: 'Organizational process assets updates',
    img: null
  },
  {
    q: 'Scope management plan and scope baseline are contained in:',
    options: ['Organizational process assets', 'Requirements traceability matrix', 'Project charter', 'Project management plan'],
    answer: 'Project management plan',
    img: null
  },
  {
    q: 'Which Plan Quality tool compares practices to improve performance?',
    options: ['Histogram', 'Quality audits', 'Benchmarking', 'Performance analysis'],
    answer: 'Benchmarking',
    img: null
  },
  {
    q: 'Risks of excessive decomposition in a WBS?',
    options: ['Insufficient funding and disqualification', 'Funding and ineffective resources', 'Disqualification and nonproductive management', 'Nonproductive management and inefficient resources'],
    answer: 'Nonproductive management and inefficient resources',
    img: null
  },
  {
    q: 'Payback period, ROI, IRR, DCF and NPV are examples of:',
    options: ['Expert judgment', 'Analytical techniques', 'Earned value management', 'Group decision-making techniques'],
    answer: 'Analytical techniques',
    img: null
  },
  {
    q: 'Units of measure, precision, accuracy, thresholds, and rules are in the:',
    options: ['Cost management plan', 'Work performance information', 'Quality management plan', 'WBS'],
    answer: 'Cost management plan',
    img: null
  },
  {
    q: 'When should quality planning be performed?',
    options: ['During charter', 'In parallel with planning', 'During risk analysis', 'As a separate step'],
    answer: 'In parallel with planning',
    img: null
  },
  {
    q: 'Lowest-level WBS planned work is known as:',
    options: ['Work packages', 'Accepted deliverables', 'WBS dictionary', 'Scope baseline'],
    answer: 'Work packages',
    img: null
  },
  {
    q: 'A measure of cost performance that is required to be achieved with remaining resources to meet a management goal is called:',
    options: ['Budget at Completion (BAC)', 'Earned Value Management (EVM)', 'To-Complete Performance Index (TCPI)', 'Cost Performance Index (CPI)'],
    answer: 'To-Complete Performance Index (TCPI)',
    img: null
  },
  {
    q: 'Which process group tracks, reviews, and regulates progress?',
    options: ['Planning', 'Executing', 'Monitoring and Controlling', 'Closing'],
    answer: 'Monitoring and Controlling',
    img: null
  },
  {
    q: 'Which analysis determines cause and degree of difference between baseline and actual performance?',
    options: ['Schedule network analysis', 'Reserve analysis', 'Alternative analysis', 'Variance analysis'],
    answer: 'Variance analysis',
    img: null
  },
  {
    q: 'The cost performance baseline is typically displayed as:',
    options: ['S-curve', 'Normal curve', 'U-curve', 'Positive slope line'],
    answer: 'S-curve',
    img: null
  },
  {
    q: 'How is quality control performed?',
    options: ['By identifying quality standards and determining how to satisfy them', 'By monitoring specific project results and determining corrective actions', 'By ensuring the team is trained in QA', 'By applying Monte Carlo, sampling, Pareto, benchmarking'],
    answer: 'By monitoring specific project results and determining corrective actions',
    img: null
  },
  {
    q: 'An input to Perform Quantitative Risk Analysis is:',
    options: ['Quality management plan', 'Project management plan', 'Communications management plan', 'Schedule management plan'],
    answer: 'Schedule management plan',
    img: null
  },
  {
    q: 'Perform Quality Control is accomplished by:',
    options: ['Identifying relevant quality standards', 'Monitoring and recording results to assess performance', 'Ensuring team trained in QA', 'Applying statistical tools for conformance'],
    answer: 'Monitoring and recording results to assess performance',
    img: null
  },
  {
    q: 'Which tool or technique is used in validating project scope?',
    options: ['Facilitated workshops', 'Interviews', 'Inspection', 'Meetings'],
    answer: 'Inspection',
    img: null
  },
  {
    q: 'Which knowledge area ensures timely and appropriate project information management?',
    options: ['Project Risk Management', 'Project Integration Management', 'Project Communications Management', 'Project Quality Management'],
    answer: 'Project Communications Management',
    img: null
  },
  {
    q: 'Which control tool identifies whether a process has predictable performance?',
    options: ['Cause and effect diagram', 'Control charts', 'Pareto chart', 'Histogram'],
    answer: 'Control charts',
    img: null
  },
  {
    q: 'Which tool is used to estimate cost?',
    options: ['Budget forecast', 'Variance analysis', 'Activity cost estimate', 'Three-point estimate'],
    answer: 'Three-point estimate',
    img: null
  },
  {
    q: 'An input to Plan Procurement Management process is:',
    options: ['Source selection criteria', 'Market research', 'Stakeholder register', 'Records management system'],
    answer: 'Stakeholder register',
    img: null
  },
  {
    q: 'Based on a chart, the cost performance index (CPI) for Task 2 is:',
    options: ['0.8', '1', '1.25', '45870'],
    answer: '1.25',
    img: null
  },
  {
    q: 'A project team member agrees to a deliverable change with an external stakeholder. This could have been avoided if:',
    options: ['Quality assurance', 'Stakeholder management plan', 'Project team building', 'Integrated change control'],
    answer: 'Integrated change control',
    img: null
  },
  {
    q: 'Which output from Control Schedule aids in communicating schedule variance or SPI?',
    options: ['Performance organizations', 'Schedule baselines', 'Work performance measurements', 'Change requests'],
    answer: 'Work performance measurements',
    img: null
  },
  {
    q: 'Which term describes assessment of correctness?',
    options: ['Accuracy', 'Precision', 'Grade', 'Quality'],
    answer: 'Accuracy',
    img: null
  },
  {
    q: 'A tool used in Perform Qualitative Risk Analysis is:',
    options: ['Risk data quality assessment', 'Variance and trend analysis', 'Data gathering techniques', 'Risk audits'],
    answer: 'Risk data quality assessment',
    img: null
  },
  {
    q: 'Cost of Quality (COQ) refers to total cost of:',
    options: ['All efforts related to quality', 'Product inspection activities', 'Maintain plan quality', 'Perform quality control'],
    answer: 'Product inspection activities',
    img: null
  },
  {
    q: 'Which is a tool used in monitoring and controlling project work?',
    options: ['Work performance information', 'Project management information system (PMIS)', 'Activity duration estimates', 'Scheduled network analysis'],
    answer: 'Project management information system (PMIS)',
    img: null
  },
  {
    q: 'Specification of both deliverables and processes focuses on:',
    options: ['Change control', 'Configuration control', 'Project monitoring and control', 'Issue control'],
    answer: 'Change control',
    img: null
  },
  {
    q: 'A logical relationship where a successor cannot start until predecessor finishes is:',
    options: ['Start-to-start (SS)', 'Start-to-finish (SF)', 'Finish-to-start (FS)', 'Finish-to-finish (FF)'],
    answer: 'Finish-to-start (FS)',
    img: null
  },
  {
    q: 'Tools and techniques used in Close Project or Phase include:',
    options: ['Project management information system', 'Product analysis', 'Expert judgment', 'Inspection'],
    answer: 'Expert judgment',
    img: null
  },
  {
    q: 'An input to Close Project or Phase is:',
    options: ['Accepted deliverables', 'Final products or services', 'Document updates', 'Work performance information'],
    answer: 'Accepted deliverables',
    img: null
  },
  {
    q: 'At project completion, a report detailing the outcome of research on a trend is a:',
    options: ['Result', 'Product', 'Service', 'Improvement'],
    answer: 'Result',
    img: null
  },
  {
    q: 'Which conflict resolution technique searches for solutions with some satisfaction for all parties?',
    options: ['Force/direct', 'Withdraw/avoid', 'Compromise/reconcile', 'Collaborate/problem solve'],
    answer: 'Compromise/reconcile',
    img: null
  },
  {
    q: 'Which tool and technique is used to assess the relationship between two variables?',
    options: ['Regression analysis', 'Variance analysis', 'Sensitivity analysis', 'Trend analysis'],
    answer: 'Regression analysis',
    img: null
  },
  {
    q: 'Which process identifies risks that might affect the project?',
    options: ['Plan Risk Management', 'Identify Risks', 'Perform Qualitative Risk Analysis', 'Perform Quantitative Risk Analysis'],
    answer: 'Identify Risks',
    img: null
  },
  {
    q: 'Which document formally authorizes the existence of a project?',
    options: ['Project management plan', 'Business case', 'Project charter', 'Scope statement'],
    answer: 'Project charter',
    img: null
  },
  {
    q: 'Which type of estimate has a range of −25% to +75%?',
    options: ['Order of magnitude', 'Budget estimate', 'Definitive estimate', 'Parametric estimate'],
    answer: 'Order of magnitude',
    img: null
  },
  {
    q: 'Which schedule compression technique adds resources?',
    options: ['Fast tracking', 'Crashing', 'Resource leveling', 'Monte Carlo analysis'],
    answer: 'Crashing',
    img: null
  },
  {
    q: 'Which process includes defining how to conduct risk management activities?',
    options: ['Identify Risks', 'Plan Risk Management', 'Perform Qualitative Risk Analysis', 'Plan Risk Responses'],
    answer: 'Plan Risk Management',
    img: null
  },
  {
    q: 'Which estimating technique uses mathematical relationships?',
    options: ['Analogous', 'Bottom-up', 'Parametric', 'Expert judgment'],
    answer: 'Parametric',
    img: null
  },
  {
    q: 'Which document describes how project scope will be defined, validated, and controlled?',
    options: ['Scope baseline', 'Requirements documentation', 'Scope management plan', 'WBS dictionary'],
    answer: 'Scope management plan',
    img: null
  },
  {
    q: 'Which type of power is based on personal charisma?',
    options: ['Formal', 'Expert', 'Referent', 'Coercive'],
    answer: 'Referent',
    img: null
  },
  {
    q: 'Which process group consumes the most project budget?',
    options: ['Initiating', 'Planning', 'Executing', 'Closing'],
    answer: 'Executing',
    img: null
  },
  {
    q: 'Which type of dependency is legally or contractually required?',
    options: ['Discretionary', 'External', 'Mandatory', 'Internal'],
    answer: 'Mandatory',
    img: null
  },
  {
    q: 'Which technique is used to evaluate schedule risk?',
    options: ['Monte Carlo analysis', 'Decision tree', 'Sensitivity analysis', 'SWOT analysis'],
    answer: 'Monte Carlo analysis',
    img: null
  },
  {
    q: 'Which process validates completed deliverables with the customer?',
    options: ['Control Quality', 'Validate Scope', 'Close Project', 'Verify Scope'],
    answer: 'Validate Scope',
    img: null
  },
  {
    q: 'Which tool visually shows dependencies between activities?',
    options: ['Histogram', 'Network diagram', 'Pareto chart', 'Control chart'],
    answer: 'Network diagram',
    img: null
  },
  {
    q: 'Which document links requirements to business objectives?',
    options: ['Requirements documentation', 'Requirements traceability matrix', 'Scope statement', 'WBS'],
    answer: 'Requirements traceability matrix',
    img: null
  },
  {
    q: 'Which contract type places the most risk on the seller?',
    options: ['Cost reimbursable', 'Time and materials', 'Fixed price', 'Cost plus incentive'],
    answer: 'Fixed price',
    img: null
  },
  {
    q: 'Which process develops options to enhance opportunities and reduce threats?',
    options: ['Plan Risk Responses', 'Identify Risks', 'Perform Qualitative Risk Analysis', 'Perform Quantitative Risk Analysis'],
    answer: 'Plan Risk Responses',
    img: null
  },
  {
    q: 'Which leadership style focuses on empowering the team?',
    options: ['Autocratic', 'Laissez-faire', 'Democratic', 'Transactional'],
    answer: 'Democratic',
    img: null
  },
  {
    q: 'Which earned value metric shows schedule efficiency?',
    options: ['CPI', 'SPI', 'EV', 'PV'],
    answer: 'SPI',
    img: null
  },
  {
    q: 'Which tool identifies the vital few causes of defects?',
    options: ['Control chart', 'Histogram', 'Pareto chart', 'Run chart'],
    answer: 'Pareto chart',
    img: null
  },
  {
    q: 'Which document defines roles and responsibilities?',
    options: ['Responsibility assignment matrix', 'Stakeholder register', 'Organization chart', 'Communications plan'],
    answer: 'Responsibility assignment matrix',
    img: null
  },
  {
    q: 'Which conflict resolution technique seeks win-win solutions?',
    options: ['Compromise', 'Force', 'Collaborate', 'Withdraw'],
    answer: 'Collaborate',
    img: null
  },
  {
    q: 'Which process determines quality requirements and standards?',
    options: ['Plan Quality Management', 'Control Quality', 'Perform Quality Assurance', 'Validate Scope'],
    answer: 'Plan Quality Management',
    img: null
  },
  {
    q: 'Which estimating method is most accurate?',
    options: ['Analogous', 'Parametric', 'Bottom-up', 'Three-point'],
    answer: 'Bottom-up',
    img: null
  },
  {
    q: 'Which process tracks, reviews, and reports project progress?',
    options: ['Executing', 'Monitoring and Controlling', 'Planning', 'Closing'],
    answer: 'Monitoring and Controlling',
    img: null
  },
  {
    q: 'Which document lists identified risks and responses?',
    options: ['Risk management plan', 'Risk register', 'Issue log', 'Assumption log'],
    answer: 'Risk register',
    img: null
  },
  {
    q: 'Which analysis compares planned vs actual results?',
    options: ['Trend analysis', 'Variance analysis', 'Reserve analysis', 'Sensitivity analysis'],
    answer: 'Variance analysis',
    img: null
  },
  {
    q: 'Which process ensures work meets quality requirements?',
    options: ['Control Quality', 'Plan Quality Management', 'Validate Scope', 'Perform Quality Assurance'],
    answer: 'Control Quality',
    img: null
  },
  {
    q: 'Which organizational structure gives PM the least authority?',
    options: ['Functional', 'Weak matrix', 'Balanced matrix', 'Strong matrix'],
    answer: 'Functional',
    img: null
  },
  {
    q: 'Which estimate uses optimistic, pessimistic, and most likely values?',
    options: ['Analogous', 'Parametric', 'Three-point', 'Bottom-up'],
    answer: 'Three-point',
    img: null
  },
  {
    q: 'Which tool helps identify stakeholder influence and interest?',
    options: ['Power-interest grid', 'RACI chart', 'WBS', 'RAM'],
    answer: 'Power-interest grid',
    img: null
  },
  {
    q: 'Which document records stakeholder engagement strategies?',
    options: ['Stakeholder register', 'Stakeholder management plan', 'Communications plan', 'Issue log'],
    answer: 'Stakeholder management plan',
    img: null
  },
  {
    q: 'Which process finalizes all project activities?',
    options: ['Validate Scope', 'Close Project or Phase', 'Control Quality', 'Close Procurements'],
    answer: 'Close Project or Phase',
    img: null
  },
  {
    q: 'Which metric measures cost efficiency?',
    options: ['SPI', 'EV', 'CPI', 'BAC'],
    answer: 'CPI',
    img: null
  },
  {
    q: 'Which process defines how changes will be managed?',
    options: ['Develop Project Charter', 'Perform Integrated Change Control', 'Develop Project Management Plan', 'Monitor and Control Project Work'],
    answer: 'Develop Project Management Plan',
    img: null
  },
  {
    q: 'Which tool visually represents process flow?',
    options: ['Histogram', 'Flowchart', 'Control chart', 'Pareto chart'],
    answer: 'Flowchart',
    img: null
  },
  {
    q: 'Which type of risk has a positive impact?',
    options: ['Threat', 'Residual', 'Secondary', 'Opportunity'],
    answer: 'Opportunity',
    img: null
  },
  {
    q: 'Which technique prioritizes risks based on probability and impact?',
    options: ['Quantitative analysis', 'Sensitivity analysis', 'Qualitative analysis', 'Monte Carlo simulation'],
    answer: 'Qualitative analysis',
    img: null
  },
  {
    q: 'Which document describes how communications will occur?',
    options: ['Communications management plan', 'Stakeholder register', 'Project charter', 'Issue log'],
    answer: 'Communications management plan',
    img: null
  },
  {
    q: 'Which conflict technique results in lose-lose?',
    options: ['Compromise', 'Withdraw', 'Force', 'Avoid'],
    answer: 'Compromise',
    img: null
  },
  {
    q: 'Which process identifies project stakeholders?',
    options: ['Plan Stakeholder Engagement', 'Identify Stakeholders', 'Manage Stakeholder Engagement', 'Control Stakeholder Engagement'],
    answer: 'Identify Stakeholders',
    img: null
  },
  {
    q: 'Which estimate is used early in the project?',
    options: ['Definitive', 'Budget', 'Order of magnitude', 'Bottom-up'],
    answer: 'Order of magnitude',
    img: null
  },
  {
    q: 'Which tool compares performance against baselines?',
    options: ['Variance analysis', 'Monte Carlo', 'Sensitivity analysis', 'Forecasting'],
    answer: 'Variance analysis',
    img: null
  },
  {
    q: 'Which document authorizes resources?',
    options: ['Business case', 'Project charter', 'Scope baseline', 'Management plan'],
    answer: 'Project charter',
    img: null
  },
  {
    q: 'Which process develops project schedule?',
    options: ['Sequence Activities', 'Estimate Durations', 'Develop Schedule', 'Control Schedule'],
    answer: 'Develop Schedule',
    img: null
  },
  {
    q: 'Which risk response strategy reduces probability or impact?',
    options: ['Avoid', 'Transfer', 'Mitigate', 'Accept'],
    answer: 'Mitigate',
    img: null
  },
  {
    q: 'Which process ensures deliverables are accepted?',
    options: ['Control Quality', 'Validate Scope', 'Close Project', 'Verify Scope'],
    answer: 'Validate Scope',
    img: null
  },
  {
    q: 'Which tool estimates schedule uncertainty?',
    options: ['Decision tree', 'Monte Carlo analysis', 'Pareto chart', 'Histogram'],
    answer: 'Monte Carlo analysis',
    img: null
  },
  {
    q: 'Which process monitors stakeholder relationships?',
    options: ['Manage Stakeholder Engagement', 'Control Stakeholder Engagement', 'Identify Stakeholders', 'Plan Stakeholder Management'],
    answer: 'Control Stakeholder Engagement',
    img: null
  },
  {
    q: 'Which document contains approved scope, schedule, and cost baselines?',
    options: ['Project charter', 'Project management plan', 'Scope statement', 'WBS dictionary'],
    answer: 'Project management plan',
    img: null
  },
  {
    q: 'The chart below is an example of a:',
    options: ['Responsibility assignment matrix (RAM)', 'Work breakdown structure (WBS)', 'RACI chart', 'Requirements traceability matrix'],
    answer: 'Requirements traceability matrix',
    img: null
  },
  {
    q: 'Which estimating technique uses actual costs of previous similar projects?',
    options: ['Analogous', 'Parametric', 'Bottom-up', 'Top-down'],
    answer: 'Analogous',
    img: null
  },
  {
    q: 'Which schedule network analysis technique is applied when critical path is calculated and resources are critical?',
    options: ['Applying calendars', 'Resource leveling', 'Resource planning', 'Resource conflict management'],
    answer: 'Resource leveling',
    img: null
  },
  {
    q: 'Plan-do-check-act is also known as:',
    options: ['Prevention over inspection', 'Statistical sampling', 'Management responsibility', 'Continuous improvement'],
    answer: 'Continuous improvement',
    img: null
  },
  {
    q: 'Which dependency is based on best practices or specific sequence preference?',
    options: ['External', 'Internal', 'Mandatory', 'Discretionary'],
    answer: 'Discretionary',
    img: null
  },
  {
    q: 'Cost variance (CV) is equal to earned value:',
    options: ['Minus actual cost (EV-AC)', 'Minus planned value (EV-PV)', 'Divided by actual cost (EV/AC)', 'Divided by planned value (EV/PV)'],
    answer: 'Minus actual cost (EV-AC)',
    img: null
  },
  {
    q: 'Which technique helps determine risks with the most potential impact?',
    options: ['Cost risk simulation analysis', 'Expected monetary value analysis', 'Modeling and simulation', 'Sensitivity analysis'],
    answer: 'Sensitivity analysis',
    img: null
  },
  {
    q: "A project requires a component with well-understood specifications. Final contract price is based on seller's performance. Which agreement is appropriate?",
    options: ['Cost Plus Incentive Fee (CPIF)', 'Fixed Price Incentive Fee (FPIF)', 'Cost Plus Award Fee (CPAF)', 'Fixed Price with Economic Price Adjustment (FP-EPA)'],
    answer: 'Fixed Price Incentive Fee (FPIF)',
    img: null
  },
  {
    q: 'What is the minimum a project schedule must include?',
    options: ['Variance analysis', 'Planned start & finish date for each activity', 'Critical path diagram', 'Critical chain analysis'],
    answer: 'Planned start & finish date for each activity',
    img: null
  },
  {
    q: 'Statistical method identifying which factors influence product variables is called:',
    options: ['Failure modes and effects analysis', 'Design of experiments', 'Quality checklist', 'Risk analysis'],
    answer: 'Design of experiments',
    img: null
  },
  {
    q: 'Which enterprise environmental factors may influence Plan Schedule Management?',
    options: ['Cultural views and professional ethics', 'Historical info and change control procedures', 'Risk control procedures and probability/impact matrix', 'Resource availability and organizational culture'],
    answer: 'Resource availability and organizational culture',
    img: null
  },
  {
    q: 'Organizational procedures dictate when project planning:',
    options: ['Ends', 'Begins', 'Delays', 'Deviates'],
    answer: 'Ends',
    img: null
  },
  {
    q: 'Change requests are an output from which Project Integration Management process?',
    options: ['Direct and Manage Project Execution', 'Develop Project Management Plan', 'Close Project', 'Develop Project Charter'],
    answer: 'Direct and Manage Project Execution',
    img: null
  },
  {
    q: 'Which Perform Quality Control tool graphically represents system elements interrelation?',
    options: ['Control chart', 'Flowchart', 'Run chart', 'Pareto chart'],
    answer: 'Flowchart',
    img: null
  },
  {
    q: "What happens to a stakeholder's project influence over time?",
    options: ['Increases', 'Decreases', 'Stays the same', 'Has no bearing'],
    answer: 'Decreases',
    img: null
  },
  {
    q: 'A measure of cost performance required to meet a goal with remaining resources is:',
    options: ['Budget at Completion (BAC)', 'Earned Value Management (EVM)', 'To-Complete Performance Index (TCPI)', 'Cost Performance Index (CPI)'],
    answer: 'To-Complete Performance Index (TCPI)',
    img: null
  },
  {
    q: 'The Monitoring and Controlling Process Group includes processes that:',
    options: ['Establish scope, objectives, and course of action', 'Define a new project or phase', 'Track, review, and regulate progress', 'Complete work defined in PM plan'],
    answer: 'Track, review, and regulate progress',
    img: null
  },
  {
    q: 'Which analysis determines the cause and degree of difference between baseline and actual performance?',
    options: ['Schedule network analysis', 'Reserve analysis', 'Alternative analysis', 'Variance analysis'],
    answer: 'Variance analysis',
    img: null
  },
  {
    q: 'The cost performance baseline is typically displayed in the form of:',
    options: ['S-curve', 'Normal curve', 'U-curve', 'Positive slope line'],
    answer: 'S-curve',
    img: null
  },
  {
    q: 'How is quality control performed?',
    options: ['By identifying quality standards and determining how to satisfy them', 'By monitoring project results and determining corrective actions', 'By ensuring team trained in QA', 'By applying Monte Carlo, sampling, Pareto, benchmarking'],
    answer: 'By monitoring project results and determining corrective actions',
    img: null
  },
  {
    q: 'An input to Perform Quantitative Risk Analysis process is:',
    options: ['Quality management plan', 'Project management plan', 'Communications management plan', 'Schedule management plan'],
    answer: 'Schedule management plan',
    img: null
  },
  {
    q: 'Perform Quality Control is accomplished by:',
    options: ['Identifying relevant quality standards', 'Monitoring and recording results to assess performance', 'Ensuring team trained in QA', 'Applying statistical tools to ensure conformance'],
    answer: 'Monitoring and recording results to assess performance',
    img: null
  },
  {
    q: 'Which tool or technique is used in validating project scope?',
    options: ['Facilitated workshops', 'Interviews', 'Inspection', 'Meetings'],
    answer: 'Inspection',
    img: null
  },
  {
    q: 'Which knowledge area ensures timely and appropriate project information management?',
    options: ['Project Risk Management', 'Project Integration Management', 'Project Communications Management', 'Project Quality Management'],
    answer: 'Project Communications Management',
    img: null
  },
  {
    q: 'Which control tool identifies whether a process has predictable performance?',
    options: ['Cause and effect diagram', 'Control charts', 'Pareto chart', 'Histogram'],
    answer: 'Control charts',
    img: null
  },
  {
    q: 'Which of the following tools and techniques is used to estimate cost?',
    options: ['Budget forecast', 'Variance analysis', 'Activity cost estimate', 'Three-point estimate'],
    answer: 'Three-point estimate',
    img: null
  },
  {
    q: 'An input to the Plan Procurement Management process is:',
    options: ['Source selection criteria', 'Market research', 'A stakeholder register', 'Records management system'],
    answer: 'A stakeholder register',
    img: null
  },
  {
    q: 'Based on a chart, what is the cost performance index (CPI) for Task 2?',
    options: ['0.8', '1', '1.25', '45870'],
    answer: '1.25',
    img: null
  },
  {
    q: 'A project team member agrees to change a deliverable after a conversation with an external stakeholder. This could have been avoided if the project team had implemented:',
    options: ['Quality assurance', 'Stakeholder management plan', 'Project team building', 'Integrated change control'],
    answer: 'Integrated change control',
    img: null
  },
  {
    q: 'Which output from the Control Schedule process aids in communication of schedule variance or SPI to stakeholders?',
    options: ['Performance organizations', 'Schedule baselines', 'Work performance measurements', 'Change requests'],
    answer: 'Work performance measurements',
    img: null
  },
  {
    q: 'Which term describes an assessment of correctness?',
    options: ['Accuracy', 'Precision', 'Grade', 'Quality'],
    answer: 'Accuracy',
    img: null
  },
  {
    q: 'A tool and technique used during Perform Qualitative Risk Analysis is:',
    options: ['Risk data quality assessment', 'Variance and trend analysis', 'Data gathering and representation techniques', 'Risk audits'],
    answer: 'Risk data quality assessment',
    img: null
  },
  {
    q: 'Cost of quality (COQ) refers to total cost of/to:',
    options: ['All efforts related to quality', 'Product inspection activities', 'Maintain plan quality', 'Perform quality control'],
    answer: 'Product inspection activities',
    img: null
  },
  {
    q: 'Which is a tool used in monitoring and controlling project work?',
    options: ['Work performance information', 'Project management information system (PMIS)', 'Activity duration estimates', 'Scheduled network analysis'],
    answer: 'Project management information system (PMIS)',
    img: null
  },
  {
    q: 'Specification of both the deliverables and processes is the focus of:',
    options: ['Change control', 'Configuration control', 'Project monitoring and control', 'Issue control'],
    answer: 'Change control',
    img: null
  },
  {
    q: 'A logical relationship in which a successor activity cannot start until a predecessor has finished is:',
    options: ['Start-to-start (SS)', 'Start-to-finish (SF)', 'Finish-to-start (FS)', 'Finish-to-finish (FF)'],
    answer: 'Finish-to-start (FS)',
    img: null
  },
  {
    q: 'Which tools/techniques are used in the Close Project or Phase process?',
    options: ['Project management information system', 'Product analysis', 'Expert judgment', 'Inspection'],
    answer: 'Expert judgment',
    img: null
  },
  {
    q: 'An input to Close Project or Phase is:',
    options: ['Accepted deliverables', 'Final products or services', 'Document updates', 'Work performance information'],
    answer: 'Accepted deliverables',
    img: null
  },
  {
    q: 'At the completion of a project, a report detailing research outcomes is created. This item is called:',
    options: ['Result', 'Product', 'Service', 'Improvement'],
    answer: 'Result',
    img: null
  },
  {
    q: 'Which conflict resolution technique searches for solutions bringing some satisfaction to all parties temporarily?',
    options: ['Force/direct', 'Withdraw/avoid', 'Compromise/reconcile', 'Collaborate/problem solve'],
    answer: 'Compromise/reconcile',
    img: null
  },
  {
    q: 'Which statistical concept calculates the average outcome when the future includes scenarios that may or may not happen?',
    options: ['Sensitivity analysis', 'Three-point estimate', 'Modeling and simulation', 'Expected monetary value analysis'],
    answer: 'Expected monetary value analysis',
    img: null
  },
  {
    q: 'When is a project finished?',
    options: ['After verbal acceptance of the customer/sponsor', 'After lessons learned documented', 'When project objectives have been met', 'After resources released'],
    answer: 'When project objectives have been met',
    img: null
  },
  {
    q: 'The process of formalizing acceptance of completed deliverables is known as:',
    options: ['Validate Scope', 'Close Project or Phase', 'Control Quality', 'Verify Scope'],
    answer: 'Validate Scope',
    img: null
  },
  {
    q: 'Those who enter a contractual agreement to provide project services are:',
    options: ['Buyers', 'Sellers', 'Business partners', 'Product users'],
    answer: 'Sellers',
    img: null
  },
  {
    q: 'Lessons learned are created and resources released in which Process Group?',
    options: ['Planning', 'Executing', 'Closing', 'Initiating'],
    answer: 'Closing',
    img: null
  },
  {
    q: 'A project has a CPI of 1.25 and US$10,000 spent. What is the earned value?',
    options: ['US$5000', 'US$9500', 'US$10,000', 'US$12,500'],
    answer: 'US$12,500',
    img: null
  },
  {
    q: 'Updates to organizational process assets such as procurement files, deliverable acceptances, lessons learned are outputs of:',
    options: ['Close Project or Phase', 'Conduct Procurements', 'Control Procurements', 'Close Procurements'],
    answer: 'Close Procurements',
    img: null
  },
  {
    q: 'When alternative dispute resolution (ADR) is necessary, which tool/technique is used?',
    options: ['Interactive communication', 'Claims administration', 'Conflict management', 'Performance reporting'],
    answer: 'Claims administration',
    img: null
  },
  {
    q: 'What do composite organizations involve?',
    options: ['Functional and project managers', 'Functional managers only', 'Project managers only', 'Technical managers and project managers'],
    answer: 'Functional and project managers',
    img: null
  },
  {
    q: 'The individual/group that provides resources and support and is accountable for project success is:',
    options: ['Sponsor', 'Customer', 'Business partners', 'Functional managers'],
    answer: 'Sponsor',
    img: null
  },
  {
    q: 'An example of a group decision-making technique is:',
    options: ['Nominal group technique', 'Majority', 'Affinity diagram', 'Multi-criteria decision analysis'],
    answer: 'Nominal group technique',
    img: null
  },
  {
    q: 'Which Knowledge Areas include processes from the Closing Process Group?',
    options: ['Project Quality & Time Management', 'Project Scope & Risk Management', 'Project Stakeholder & Cost Management', 'Project Integration & Procurement Management'],
    answer: 'Project Integration & Procurement Management',
    img: null
  },
  {
    q: 'Which conflict resolution technique emphasizes areas of agreement rather than differences?',
    options: ['Compromising', 'Collaborating', 'Smoothing', 'Problem Solving'],
    answer: 'Smoothing',
    img: null
  },
  {
    q: 'An output of the Close Project (or Close Phase) process is:',
    options: ['Accepted deliverables', 'Organizational process asset updates', 'Work performance information', 'Project management plan updates'],
    answer: 'Organizational process asset updates',
    img: null
  },
  {
    q: 'In a weak matrix, the project manager’s role is:',
    options: ['Part-time', 'Full-time', 'Occasional', 'Unlimited'],
    answer: 'Part-time',
    img: null
  },
  {
    q: 'Which degree of authority does a project manager have in a strong matrix organizational structure?',
    options: ['Limited', 'Low to moderate', 'Moderate to high', 'High to almost total'],
    answer: 'Moderate to high',
    img: null
  },
  {
    q: 'Which of the following is an output of Close Procurements?',
    options: ['Accepted deliverables', 'Organizational process assets updates', 'Managing stakeholder expectations', 'Performance reports'],
    answer: 'Organizational process assets updates',
    img: null
  },
  {
    q: 'The links between the processes in the Process Groups are often:',
    options: ['Intuitive', 'Iterative', 'Measured', 'Monitored'],
    answer: 'Iterative',
    img: null
  },
  {
    q: 'A project manager builds consensus and overcomes obstacles by employing which communication technique?',
    options: ['Listening', 'Facilitation', 'Meeting management', 'Presentation'],
    answer: 'Facilitation',
    img: null
  },
  {
    q: 'Which estimating technique uses values from previous similar projects for estimating the same parameter for a current project?',
    options: ['Reserve analysis', 'Three-point estimating', 'Parametric estimating', 'Analogous estimating'],
    answer: 'Analogous estimating',
    img: null
  },
  {
    q: 'The person assigned by the performing organization to be responsible for achieving the project objectives is the:',
    options: ['Functional manager', 'Program manager', 'Project manager', 'Portfolio manager'],
    answer: 'Project manager',
    img: null
  },
  {
    q: 'What is the number of stakeholders if the project has 28 potential communication channels?',
    options: ['7', '8', '14', '16'],
    answer: '8',
    img: null
  },
  {
    q: 'Which technique should a project manager use when a collaborative approach to conflict management is not possible?',
    options: ['Coaching', 'Avoidance', 'Consensus', 'Influencing'],
    answer: 'Avoidance',
    img: null
  },
  {
    q: 'Lessons learned documentation is gathered during which Project Management Process Group?',
    options: ['Planning', 'Executing', 'Closing', 'Initiating'],
    answer: 'Closing',
    img: null
  },
  {
    q: 'The process for performing variance analysis may vary depending on:',
    options: ['Scenario building, technology forecasting, and forecast by analogy', 'Working relationships among stakeholders and team members', 'Application area, standard used, and industry', 'Work to be completed next'],
    answer: 'Application area, standard used, and industry',
    img: null
  },
  {
    q: 'Which process documents the business needs of a project and the new product, service, or result intended to satisfy those requirements?',
    options: ['Develop Project Management Plan', 'Develop Project Charter', 'Direct and Manage Project Execution', 'Collect Requirements'],
    answer: 'Develop Project Charter',
    img: null
  },
  {
    q: 'Which is the correct formula for calculating expected activity cost for three-point estimating?',
    options: ['Ce = (C0 + 6Cm + Cp)/4', 'Ce = (6C0 + Cm + Cp)/4', 'Ce = (C0 + 4Cm + Cp)/6', 'Ce = (C0 + Cm + 4Cp)/6'],
    answer: 'Ce = (C0 + 4Cm + Cp)/6',
    img: null
  },
  {
    q: 'In which Process Group are lessons learned documented?',
    options: ['Planning', 'Closing', 'Executing', 'Initiating'],
    answer: 'Closing',
    img: null
  },
  {
    q: 'Exhibit A is an example of which type of Sequence Activities?',
    options: ['Activity-on-arrow diagramming', 'Precedence diagramming', 'Project schedule network diagramming', 'Mathematical analysis diagramming'],
    answer: 'Precedence diagramming',
    img: null
  },
  {
    q: 'The cost benefit analysis tool is used for creating:',
    options: ['Pareto charts', 'Quality metrics', 'Change requests', 'Ishikawa diagrams'],
    answer: 'Quality metrics',
    img: null
  },
  {
    q: 'What type of reward can hurt team cohesiveness?',
    options: ['Sole-sum', 'Win-lose', 'Lose-win', 'Partial-sum'],
    answer: 'Win-lose',
    img: null
  },
  {
    q: 'Which of the following is a complete set of indexed contract documentation, including the closed contract?',
    options: ['Procurement package', 'Negotiated settlements', 'Procurement file', 'Procurement management plan'],
    answer: 'Procurement file',
    img: null
  },
  {
    q: 'The process of identifying and documenting relationships among project activities is known as:',
    options: ['Control Schedule', 'Sequence Activities', 'Define Activities', 'Develop Schedule'],
    answer: 'Sequence Activities',
    img: null
  },
  {
    q: 'Which activity may occur at project or phase closure?',
    options: ['Acceptance of deliverables', 'Change requests', 'Project management plan updates', 'Benchmarking'],
    answer: 'Acceptance of deliverables',
    img: null
  },
  {
    q: 'Which enterprise environmental factors may influence Plan Schedule Management?',
    options: ['Cultural views on time and ethics', 'Historical info & change control procedures', 'Risk control procedures & probability-impact matrix', 'Resource availability & org culture and structure'],
    answer: 'Resource availability & org culture and structure',
    img: null
  },
  {
    q: 'While processes in the Planning Process Group seek to collect feedback and define project documents to guide project work, organizational procedures dictate when project planning:',
    options: ['Ends', 'Begins', 'Delays', 'Deviates'],
    answer: 'Ends',
    img: null
  },
  {
    q: 'Change requests are an output from which Project Integration Management process?',
    options: ['Direct and Manage Project Execution', 'Develop Project Management Plan', 'Close Project', 'Develop Project Charter'],
    answer: 'Direct and Manage Project Execution',
    img: null
  },
  {
    q: 'Which Perform Quality Control tool graphically represents how various elements of a system interrelate?',
    options: ['Control chart', 'Flowchart', 'Run chart', 'Pareto chart'],
    answer: 'Flowchart',
    img: null
  },
  {
    q: "What happens to a stakeholder's project influence over time?",
    options: ['Increases', 'Decreases', 'Stays the same', 'Has no bearing'],
    answer: 'Decreases',
    img: null
  },
  {
    q: 'A measure of cost performance that is required to be achieved with the remaining resources to meet a specified goal is known as the:',
    options: ['Budget at Completion (BAC)', 'Earned Value Management (EVM)', 'To-Complete Performance Index (TCPI)', 'Cost Performance Index (CPI)'],
    answer: 'To-Complete Performance Index (TCPI)',
    img: null
  },
  {
    q: 'The Monitoring and Controlling Process Group includes processes that:',
    options: ['Establish the scope, objectives, and course of action of a project', 'Define a new project or phase', 'Track, review, and regulate project progress and performance', 'Complete the work defined in the project management plan'],
    answer: 'Track, review, and regulate project progress and performance',
    img: null
  },
  {
    q: 'Which type of analysis is used to determine the cause and degree of difference between the baseline and actual performance?',
    options: ['Schedule network analysis', 'Reserve analysis', 'Alternative analysis', 'Variance analysis'],
    answer: 'Variance analysis',
    img: null
  },
  {
    q: 'The cost performance baseline is typically displayed in the form of:',
    options: ['An S-curve', 'A normal curve', 'A U-curve', 'A positive slope line'],
    answer: 'An S-curve',
    img: null
  },
  {
    q: 'How is quality control performed?',
    options: ['By identifying quality standards and determining how to satisfy them', 'By monitoring specific project results and determining corrective actions', 'By ensuring project team is trained in QA processes', 'By applying Monte Carlo, sampling, Pareto analysis, benchmarking'],
    answer: 'By monitoring specific project results and determining corrective actions',
    img: null
  },
  {
    q: 'An input to the Perform Quantitative Risk Analysis process is the:',
    options: ['Quality management plan', 'Project management plan', 'Communications management plan', 'Schedule management plan'],
    answer: 'Schedule management plan',
    img: null
  },
  {
    q: 'Perform Quality Control is accomplished by:',
    options: ['Identifying quality standards and determining how to satisfy them', 'Monitoring and recording results to assess performance and recommend changes', 'Ensuring the team is trained in QA processes', 'Applying Monte Carlo, sampling, Pareto analysis, benchmarking'],
    answer: 'Monitoring and recording results to assess performance and recommend changes',
    img: null
  },
  {
    q: 'Which tool or technique is used in validating the scope of a project?',
    options: ['Facilitated workshops', 'Interviews', 'Inspection', 'Meetings'],
    answer: 'Inspection',
    img: null
  },
  {
    q: 'Which knowledge area employs processes required to ensure timely and appropriate generation, collection, distribution, storage, retrieval, and disposition of project information?',
    options: ['Project Risk Management', 'Project Integration Management', 'Project Communications Management', 'Project Quality Management'],
    answer: 'Project Communications Management',
    img: null
  },
  {
    q: 'Which type of control tool identifies whether a process has predictable performance?',
    options: ['Cause and effect diagram', 'Control Charts', 'Pareto Chart', 'Histogram'],
    answer: 'Control Charts',
    img: null
  },
  {
    q: 'Which of the following tools and techniques is used to estimate cost?',
    options: ['Budget forecast', 'Variance analysis', 'Activity cost estimate', 'Three-point estimate'],
    answer: 'Three-point estimate',
    img: null
  },
  {
    q: 'An input to the Plan Procurement Management process is:',
    options: ['Source selection criteria', 'Market research', 'A stakeholder register', 'A records management system'],
    answer: 'A stakeholder register',
    img: null
  },
  {
    q: 'Based on a project chart, what is the cost performance index (CPI) for Task 2?',
    options: ['0.8', '1', '1.25', '45870'],
    answer: '1.25',
    img: null
  },
  {
    q: 'A project team member agrees to change a project deliverable after a conversation with an external stakeholder. This could have been avoided if the project team had implemented:',
    options: ['Quality assurance', 'Stakeholder management plan', 'Project team building', 'Integrated change control'],
    answer: 'Integrated change control',
    img: null
  },
  {
    q: 'Which of the following outputs from the Control Schedule process aids in communicating schedule variance, SPI, or performance status to stakeholders?',
    options: ['Performance organizations', 'Schedule baselines', 'Work performance measurements', 'Change requests'],
    answer: 'Work performance measurements',
    img: null
  },
  {
    q: 'Which term describes an assessment of correctness?',
    options: ['Accuracy', 'Precision', 'Grade', 'Quality'],
    answer: 'Accuracy',
    img: null
  },
  {
    q: 'A tool and technique used during the Perform Qualitative Risk Analysis process is:',
    options: ['Risk data quality assessment', 'Variance and trend analysis', 'Data gathering and representation techniques', 'Risk audits'],
    answer: 'Risk data quality assessment',
    img: null
  },
  {
    q: 'Cost of quality (COQ) refers to total cost of/to:',
    options: ['All efforts related to quality', 'Product inspection activities', 'Maintain plan quality', 'Perform quality control'],
    answer: 'Product inspection activities',
    img: null
  },
  {
    q: 'Which is a tool used in monitoring and controlling project work?',
    options: ['Work performance information', 'Project management information system (PMIS)', 'Activity duration estimates', 'Scheduled network analysis'],
    answer: 'Project management information system (PMIS)',
    img: null
  },
  {
    q: 'Specification of both the deliverables and the processes is the focus of:',
    options: ['Change control', 'Configuration control', 'Project monitoring and control', 'Issue control'],
    answer: 'Change control',
    img: null
  },
  {
    q: 'A logical relationship in which a successor activity cannot start until a predecessor activity has finished is known as:',
    options: ['Start-to-start (SS)', 'Start-to-finish (SF)', 'Finish-to-start (FS)', 'Finish-to-finish (FF)'],
    answer: 'Finish-to-start (FS)',
    img: null
  },
  {
    q: 'Which of the following tools and techniques are utilized in the Close Project or Phase process?',
    options: ['Project management information system', 'Product analysis', 'Expert judgment', 'Inspection'],
    answer: 'Expert judgment',
    img: null
  },
  {
    q: 'An input to Close Project or Phase is:',
    options: ['Accepted deliverables', 'Final products or services', 'Document updates', 'Work performance information'],
    answer: 'Accepted deliverables',
    img: null
  },
  {
    q: 'At the completion of a project, a report is prepared detailing the outcome of research conducted on a global trend during the project. Which item did this project create?',
    options: ['Result', 'Product', 'Service', 'Improvement'],
    answer: 'Result',
    img: null
  },
  {
    q: 'Which conflict resolution technique searches for solutions that bring some satisfaction to all parties to temporarily or partially resolve the conflict?',
    options: ['Force/direct', 'Withdraw/avoid', 'Compromise/reconcile', 'Collaborate/problem solve'],
    answer: 'Compromise/reconcile',
    img: null
  },
  {
    q: 'Which statistical concept calculates the average outcome when the future includes scenarios that may or may not happen?',
    options: ['Sensitivity analysis', 'Three-point estimate', 'Modeling and simulation', 'Expected monetary value analysis'],
    answer: 'Expected monetary value analysis',
    img: null
  },
  {
    q: 'When is a project finished?',
    options: ['After verbal acceptance of the customer or sponsor', 'After lessons learned have been documented in contract closure', 'When the project objectives have been met', 'After resources have been released'],
    answer: 'When the project objectives have been met',
    img: null
  },
  {
    q: 'The process of formalizing acceptance of the completed project deliverables is known as:',
    options: ['Validate Scope', 'Close Project or Phase', 'Control Quality', 'Verify Scope'],
    answer: 'Validate Scope',
    img: null
  },
  {
    q: 'Those who enter into a contractual agreement to provide services necessary for a project are:',
    options: ['Buyers', 'Sellers', 'Business partners', 'Product users'],
    answer: 'Sellers',
    img: null
  },
  {
    q: 'Lessons learned are created and project resources are released in which Process Group?',
    options: ['Planning', 'Executing', 'Closing', 'Initiating'],
    answer: 'Closing',
    img: null
  },
  {
    q: 'A project has a current cost performance index (CPI) of 1.25. To date, US$10,000 have been spent. What is the earned value of the work completed?',
    options: ['US$5000', 'US$9500', 'US$10,000', 'US$12,500'],
    answer: 'US$12,500',
    img: null
  },
  {
    q: 'Updates to organizational process assets such as procurement files, deliverable acceptances, and lessons learned documentation are typical outputs of which process?',
    options: ['Close Project or Phase', 'Conduct Procurements', 'Control Procurements', 'Close Procurements'],
    answer: 'Close Procurements',
    img: null
  },
  {
    q: 'When alternative dispute resolution (ADR) is necessary, which tool or technique should be utilized?',
    options: ['Interactive communication', 'Claims administration', 'Conflict management', 'Performance reporting'],
    answer: 'Claims administration',
    img: null
  },
  {
    q: 'What do composite organizations involve?',
    options: ['Functional and project managers', 'Functional managers only', 'Project managers only', 'Technical managers and project managers'],
    answer: 'Functional and project managers',
    img: null
  },
  {
    q: 'The individual or group that provides resources and support for a project and is accountable for success is the:',
    options: ['Sponsor', 'Customer', 'Business partners', 'Functional managers'],
    answer: 'Sponsor',
    img: null
  },
  {
    q: 'An example of a group decision-making technique is:',
    options: ['Nominal group technique', 'Majority', 'Affinity diagram', 'Multi-criteria decision analysis'],
    answer: 'Nominal group technique',
    img: null
  },
  {
    q: 'Which Knowledge Areas include processes from the Closing Process Group?',
    options: ['Project Quality Management and Project Time Management', 'Project Scope Management and Project Risk Management', 'Project Stakeholder Management and Project Cost Management', 'Project Integration Management and Project Procurement Management'],
    answer: 'Project Integration Management and Project Procurement Management',
    img: null
  },
  {
    q: 'Which of the following is a conflict resolution technique that emphasizes areas of agreement rather than areas of difference?',
    options: ['Compromising', 'Collaborating', 'Smoothing', 'Problem Solving'],
    answer: 'Smoothing',
    img: null
  },
  {
    q: 'An output of the Close Project (or Close Phase) process is:',
    options: ['Accepted deliverables', 'Organizational process asset updates', 'Work performance information', 'Project management plan updates'],
    answer: 'Organizational process asset updates',
    img: null
  },
  {
    q: "In a weak matrix, the project manager's role is:",
    options: ['Part-time', 'Full-time', 'Occasional', 'Unlimited'],
    answer: 'Part-time',
    img: null
  },
  {
    q: 'Which degree of authority does a project manager have on a project in a strong matrix organizational structure?',
    options: ['Limited', 'Low to moderate', 'Moderate to high', 'High to almost total'],
    answer: 'Moderate to high',
    img: null
  },
  {
    q: 'Which of the following is an output of Close Procurements?',
    options: ['Accepted deliverables', 'Organizational process assets updates', 'Managing stakeholder expectations', 'Performance reports'],
    answer: 'Organizational process assets updates',
    img: null
  },
  {
    q: 'The links between the processes in the Process Groups are often:',
    options: ['Intuitive', 'Iterative', 'Measured', 'Monitored'],
    answer: 'Iterative',
    img: null
  },
  {
    q: 'A project manager builds consensus and overcomes obstacles by employing which communication technique?',
    options: ['Listening', 'Facilitation', 'Meeting management', 'Presentation'],
    answer: 'Facilitation',
    img: null
  },
  {
    q: 'Which of the following is an estimating technique that uses the values of parameters from previous similar projects for estimating the same parameter for a current project?',
    options: ['Reserve analysis', 'Three-point estimating', 'Parametric estimating', 'Analogous estimating'],
    answer: 'Analogous estimating',
    img: null
  },
  {
    q: 'The person assigned by the performing organization to be responsible for achieving the project objectives is the:',
    options: ['Functional manager', 'Program manager', 'Project manager', 'Portfolio manager'],
    answer: 'Project manager',
    img: null
  },
  {
    q: 'Which is a tool used in monitoring and controlling project work?',
    options: ['Work performance information', 'Project management information system (PMIS)', 'Activity duration estimates', 'Scheduled network analysis'],
    answer: 'Project management information system (PMIS)',
    img: null
  },
  {
    q: 'Specification of both the deliverables and the processes is the focus of:',
    options: ['Change control', 'Configuration control', 'Project monitoring and control', 'Issue control'],
    answer: 'Change control',
    img: null
  },
  {
    q: 'A logical relationship in which a successor activity cannot start until a predecessor activity has finished is known as:',
    options: ['Start-to-start (SS)', 'Start-to-finish (SF)', 'Finish-to-start (FS)', 'Finish-to-finish (FF)'],
    answer: 'Finish-to-start (FS)',
    img: null
  },
  {
    q: 'Which of the following tools and techniques are utilized in the Close Project or Phase process?',
    options: ['Project management information system', 'Product analysis', 'Expert judgment', 'Inspection'],
    answer: 'Expert judgment',
    img: null
  },
  {
    q: 'An input to Close Project or Phase is:',
    options: ['Accepted deliverables', 'Final products or services', 'Document updates', 'Work performance information'],
    answer: 'Accepted deliverables',
    img: null
  },
  {
    q: 'At the completion of a project, a report is prepared detailing the outcome of research conducted on a global trend during the project. Which item did this project create?',
    options: ['Result', 'Product', 'Service', 'Improvement'],
    answer: 'Result',
    img: null
  },
  {
    q: 'Which conflict resolution technique searches for solutions that bring some satisfaction to all parties to temporarily or partially resolve the conflict?',
    options: ['Force/direct', 'Withdraw/avoid', 'Compromise/reconcile', 'Collaborate/problem solve'],
    answer: 'Compromise/reconcile',
    img: null
  },
  {
    q: 'Which statistical concept calculates the average outcome when the future includes scenarios that may or may not happen?',
    options: ['Sensitivity analysis', 'Three-point estimate', 'Modeling and simulation', 'Expected monetary value analysis'],
    answer: 'Expected monetary value analysis',
    img: null
  },
  {
    q: 'When is a project finished?',
    options: ['After verbal acceptance of the customer or sponsor', 'After lessons learned have been documented in contract closure', 'When the project objectives have been met', 'After resources have been released'],
    answer: 'When the project objectives have been met',
    img: null
  },
  {
    q: 'The process of formalizing acceptance of the completed project deliverables is known as:',
    options: ['Validate Scope', 'Close Project or Phase', 'Control Quality', 'Verify Scope'],
    answer: 'Validate Scope',
    img: null
  },
  {
    q: 'Those who enter into a contractual agreement to provide services necessary for a project are:',
    options: ['Buyers', 'Sellers', 'Business partners', 'Product users'],
    answer: 'Sellers',
    img: null
  },
  {
    q: 'Lessons learned are created and project resources are released in which Process Group?',
    options: ['Planning', 'Executing', 'Closing', 'Initiating'],
    answer: 'Closing',
    img: null
  },
  {
    q: 'A project has a current cost performance index (CPI) of 1.25. To date, US$10,000 have been spent. What is the earned value of the work completed?',
    options: ['US$5000', 'US$9500', 'US$10,000', 'US$12,500'],
    answer: 'US$12,500',
    img: null
  },
  {
    q: 'Updates to organizational process assets such as procurement files, deliverable acceptances, and lessons learned documentation are typical outputs of which process?',
    options: ['Close Project or Phase', 'Conduct Procurements', 'Control Procurements', 'Close Procurements'],
    answer: 'Close Procurements',
    img: null
  },
  {
    q: 'When alternative dispute resolution (ADR) is necessary, which tool or technique should be utilized?',
    options: ['Interactive communication', 'Claims administration', 'Conflict management', 'Performance reporting'],
    answer: 'Claims administration',
    img: null
  },
  {
    q: 'What do composite organizations involve?',
    options: ['Functional and project managers', 'Functional managers only', 'Project managers only', 'Technical managers and project managers'],
    answer: 'Functional and project managers',
    img: null
  },
  {
    q: 'The individual or group that provides resources and support for a project and is accountable for success is the:',
    options: ['Sponsor', 'Customer', 'Business partners', 'Functional managers'],
    answer: 'Sponsor',
    img: null
  },
  {
    q: 'An example of a group decision-making technique is:',
    options: ['Nominal group technique', 'Majority', 'Affinity diagram', 'Multi-criteria decision analysis'],
    answer: 'Nominal group technique',
    img: null
  },
  {
    q: 'Which Knowledge Areas include processes from the Closing Process Group?',
    options: ['Project Quality Management and Project Time Management', 'Project Scope Management and Project Risk Management', 'Project Stakeholder Management and Project Cost Management', 'Project Integration Management and Project Procurement Management'],
    answer: 'Project Integration Management and Project Procurement Management',
    img: null
  },
  {
    q: 'Which of the following is a conflict resolution technique that emphasizes areas of agreement rather than areas of difference?',
    options: ['Compromising', 'Collaborating', 'Smoothing', 'Problem Solving'],
    answer: 'Smoothing',
    img: null
  },
  {
    q: 'An output of the Close Project (or Close Phase) process is:',
    options: ['Accepted deliverables', 'Organizational process asset updates', 'Work performance information', 'Project management plan updates'],
    answer: 'Organizational process asset updates',
    img: null
  },
  {
    q: "In a weak matrix, the project manager's role is:",
    options: ['Part-time', 'Full-time', 'Occasional', 'Unlimited'],
    answer: 'Part-time',
    img: null
  },
  {
    q: 'Which degree of authority does a project manager have on a project in a strong matrix organizational structure?',
    options: ['Limited', 'Low to moderate', 'Moderate to high', 'High to almost total'],
    answer: 'Moderate to high',
    img: null
  },
  {
    q: 'Which of the following is an output of Close Procurements?',
    options: ['Accepted deliverables', 'Organizational process assets updates', 'Managing stakeholder expectations', 'Performance reports'],
    answer: 'Organizational process assets updates',
    img: null
  },
  {
    q: 'The links between the processes in the Process Groups are often:',
    options: ['Intuitive', 'Iterative', 'Measured', 'Monitored'],
    answer: 'Iterative',
    img: null
  },
  {
    q: 'A project manager builds consensus and overcomes obstacles by employing which communication technique?',
    options: ['Listening', 'Facilitation', 'Meeting management', 'Presentation'],
    answer: 'Facilitation',
    img: null
  },
  {
    q: 'Which of the following is an estimating technique that uses the values of parameters from previous similar projects for estimating the same parameter or measure for a current project?',
    options: ['Reserve analysis', 'Three-point estimating', 'Parametric estimating', 'Analogous estimating'],
    answer: 'Analogous estimating',
    img: null
  },
  {
    q: 'The person assigned by the performing organization to be responsible for achieving the project objectives is the:',
    options: ['Functional manager', 'Program manager', 'Project manager', 'Portfolio manager'],
    answer: 'Project manager',
    img: null
  },
  {
    q: 'What is the number of stakeholders, if the project has 28 potential communication channels?',
    options: ['7', '8', '14', '16'],
    answer: '8',
    img: null
  },
  {
    q: 'Which technique should a project manager use in a situation in which a collaborative approach to conflict management is not possible?',
    options: ['Coaching', 'Avoidance', 'Consensus', 'Influencing'],
    answer: 'Avoidance',
    img: null
  },
  {
    q: 'Lessons learned documentation is gathered during which of the following Project Management Process Groups?',
    options: ['Planning', 'Executing', 'Closing', 'Initiating'],
    answer: 'Closing',
    img: null
  },
  {
    q: 'The process for performing variance analysis may vary, depending on:',
    options: ['Scenario building, technology forecasting, and forecast by analogy', 'Working relationships among various stakeholders and team members', 'Application area, the standard used, and the industry', 'Work to be completed next'],
    answer: 'Application area, the standard used, and the industry',
    img: null
  },
  {
    q: 'Which process documents the business needs of a project and the new product, service, or other result that is intended to satisfy those requirements?',
    options: ['Develop Project Management Plan', 'Develop Project Charter', 'Direct and Manage Project Execution', 'Collect Requirements'],
    answer: 'Develop Project Charter',
    img: null
  },
  {
    q: 'Which is the correct formula for calculating expected activity cost for three-point estimating?',
    options: ['Ce = (C0 + 6Cm + Cp)/4', 'Ce = (6C0 + Cm + Cp)/4', 'Ce = (C0 + 4Cm + Cp)/6', 'Ce = (C0 + Cm + 4Cp)/6'],
    answer: 'Ce = (C0 + 4Cm + Cp)/6',
    img: null
  },
  {
    q: 'In which Process Group are lessons learned documented?',
    options: ['Planning', 'Closing', 'Executing', 'Initiating'],
    answer: 'Closing',
    img: null
  },
  {
    q: 'Exhibit A is an example of which of the following types of Sequence Activities?',
    options: ['Activity-on-arrow diagramming', 'Precedence diagramming', 'Project schedule network diagramming', 'Mathematical analysis diagramming'],
    answer: 'Precedence diagramming',
    img: null
  },
  {
    q: 'The cost benefit analysis tool is used for creating:',
    options: ['Pareto charts', 'Quality metrics', 'Change requests', 'Ishikawa diagrams'],
    answer: 'Quality metrics',
    img: null
  },
  {
    q: 'What type of reward can hurt team cohesiveness?',
    options: ['Sole-sum', 'Win-lose', 'Lose-win', 'Partial-sum'],
    answer: 'Win-lose',
    img: null
  },
  {
    q: 'Which of the following is a complete set of indexed contract documentation, including the closed contract?',
    options: ['Procurement package', 'Negotiated settlements', 'Procurement file', 'Procurement management plan'],
    answer: 'Procurement file',
    img: null
  },
  {
    q: 'The process of identifying and documenting relationships among the project activities is known as:',
    options: ['Control Schedule', 'Sequence Activities', 'Define Activities', 'Develop Schedule'],
    answer: 'Sequence Activities',
    img: null
  },
  {
    q: 'Which activity may occur at project or phase closure?',
    options: ['Acceptance of deliverables', 'Change requests', 'Project management plan updates', 'Benchmarking'],
    answer: 'Acceptance of deliverables',
    img: null
  },
];
