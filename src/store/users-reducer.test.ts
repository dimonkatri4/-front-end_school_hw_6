import usersReducer, {
    InitialStateUserType,
    setRequestError,
    setUsersInfo,
    toggleIsFetching,
} from './users-reducer';

describe('User reducer', () => {
    let state: InitialStateUserType;
    beforeEach(() => {
        state = {
            userInfo: null,
            isFetching: false,
            requestError: null,
            pageSize: 6
        };
    });

    it('userInfo should be set in state and it must be object newUserInfo', () => {
        const newUserInfo =
            {
                author: {
                    uniqueId: 'string',
                    avatarMedium: 'string',
                    nickname: 'string',
                    signature: 'string',
                },
                authorStats: {
                    followingCount: 1,
                    followerCount: 2,
                    heartCount: 3,
                    videoCount: 4,
                }
            }
        ;
        const action = setUsersInfo(newUserInfo);
        const newState = usersReducer(state, action);
        expect(typeof newState.userInfo).toBe('object');
        expect(newState.userInfo).not.toBeNull();
        expect(newState.userInfo).toBe(newUserInfo);
    });

    it('isFetching should be set value "true"', () => {
        const action = toggleIsFetching(true);
        const newState = usersReducer(state, action);
        expect(newState.isFetching).toBe(true);
    });

    it('the error should be set in state', () => {
        const error = new Error('Some error');
        const action = setRequestError(error);
        const newState = usersReducer(state, action);
        expect(newState.requestError).toBe(error);
    });
});
