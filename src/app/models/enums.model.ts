export enum StateEnum {
    ALL = 'all',
    OBSOLETE = 'obsolete',
    TODO = 'todo',
    HOLD = 'on-hold',
    ANALYSIS = 'analysis completed',
    QA = 'qa-deployed',
    STAGE = 'stage-deployed',
    PROD = 'prod-deployed',
    DONE = 'done'
}

export const stateValues = {
    'all': 0,
    'obsolete': 1,
    'todo': 0,
    'on-hold': 0,
    'analysis completed': 1,
    'qa-deployed': 2,
    'stage-deployed': 3,
    'prod-deployed': 4,
    'done': 4
}

export const stateList = [
    { value: 'all', label: 'ALL' },
    { value: 'analysis completed', label: 'Analysis Completed' },
    { value: 'qa-deployed', label: 'QA Deployed' },
    { value: 'stage-deployed', label: 'Stage Deployed' },
    { value: 'prod-deployed', label: 'Prod Deployed' }
]

export const cardStateList = [
    { value: 'analysis completed', label: 'Analysis Completed' },
    { value: 'qa-deployed', label: 'QA Deployed' },
    { value: 'stage-deployed', label: 'Stage Deployed' },
    { value: 'prod-deployed', label: 'Prod Deployed' },
    { value: 'obsolete', label: 'Obsolete' },
    { value: 'todo', label: 'Todo' },
    { value: 'done', label: 'Done' },
    { value: 'on-hold', label: 'On Hold' }
]

