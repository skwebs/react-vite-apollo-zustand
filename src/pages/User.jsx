import { useQuery } from '@apollo/client'
import { LoginModal } from '../components'
import { GET_USERS } from '../graphql/query'
import { useOverlayStore } from '../store'


const User = () => {

    const { overlayStaus, openOverlay } = useOverlayStore();

    const { loading, error, data } = useQuery(GET_USERS);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    console.log(data.users.data)

    const viewDetails = id => {
        console.log(id)
        openOverlay()
    }
    const editDetails = id => {
        console.log(id)
    }
    const deleteDetails = id => {
        console.log(id)
    }

    return (
        <>
            {overlayStaus && <LoginModal />}

            <div className='max-w-7xl mx-auto'>
                <h2 className='text-2xl font-semibold my-5 text-center'>User</h2>
                <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="py-3 px-6">
                                    ID
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Name
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Email
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.users.data.map((user, i) =>

                                <tr key={i} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                    <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {user.id}
                                    </th>
                                    <td className="py-4 px-6">
                                        {user.name}
                                    </td>
                                    <td className="py-4 px-6">
                                        {user.email}
                                    </td>
                                    <td className="py-4 px-6">
                                        <a onClick={() => viewDetails(user.id)} href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-2">View</a>
                                        <a onClick={() => editDetails(user.id)} href="#" className="font-medium text-amber-600 dark:text-amber-500 hover:underline mx-2">Edit</a>
                                        <a onClick={() => deleteDetails(user.id)} href="#" className="font-medium text-red-600 dark:text-blue-red hover:underline mx-2">Delete</a>
                                    </td>
                                </tr>)}
                        </tbody>
                    </table>
                </div>

            </div>

        </>
    )
}

export default User
