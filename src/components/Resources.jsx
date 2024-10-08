import ChildResources from './ChildResources';

const getResources = async (data) => {
    const response = await fetch(`https://apistaging.intellect.com/wp-json/res/v1/get?types=all&include=${data.acf.content[9].list.join(',')}`)
    const formattedJson = await response.json()
    return formattedJson
}

const Resources = async ({ data }) => {
    const resource = await getResources(data)
    return (
        <ChildResources data={resource} />
    )
}

export default Resources