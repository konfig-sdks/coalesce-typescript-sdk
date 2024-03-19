type Parameter = {
    name: string
}
type Entry = {
    parameters: Parameter[]
}
export const operationParameterMap: Record<string, Entry> = {
    '/api/v1/environments/{environmentID}-GET': {
        parameters: [
            {
                name: 'environmentID'
            },
        ]
    },
    '/api/v1/environments-GET': {
        parameters: [
            {
                name: 'detail'
            },
        ]
    },
    '/scheduler/cancelRun-POST': {
        parameters: [
            {
                name: 'runID'
            },
            {
                name: 'orgID'
            },
            {
                name: 'environmentID'
            },
        ]
    },
    '/scheduler/runStatus-GET': {
        parameters: [
            {
                name: 'runCounter'
            },
        ]
    },
    '/scheduler/startRun-POST': {
        parameters: [
            {
                name: 'runDetails'
            },
            {
                name: 'parameters'
            },
            {
                name: 'userCredentials'
            },
        ]
    },
    '/scheduler/rerun-POST': {
        parameters: [
            {
                name: 'runDetails'
            },
            {
                name: 'userCredentials'
            },
            {
                name: 'parameters'
            },
        ]
    },
    '/api/v1/environments/{environmentID}/nodes/{nodeID}-GET': {
        parameters: [
            {
                name: 'environmentID'
            },
            {
                name: 'nodeID'
            },
        ]
    },
    '/api/v1/environments/{environmentID}/nodes-GET': {
        parameters: [
            {
                name: 'environmentID'
            },
            {
                name: 'detail'
            },
        ]
    },
    '/api/v1/runs/{runID}-GET': {
        parameters: [
            {
                name: 'runID'
            },
        ]
    },
    '/api/v1/runs-GET': {
        parameters: [
            {
                name: 'limit'
            },
            {
                name: 'startingFrom'
            },
            {
                name: 'orderBy'
            },
            {
                name: 'orderByDirection'
            },
            {
                name: 'runType'
            },
            {
                name: 'runStatus'
            },
            {
                name: 'environmentID'
            },
            {
                name: 'detail'
            },
        ]
    },
    '/api/v1/runs/{runID}/results-GET': {
        parameters: [
            {
                name: 'runID'
            },
        ]
    },
}