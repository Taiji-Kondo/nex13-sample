const getTitle = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return 'My Page'
};

const MyPage = async () => {
  const title = await getTitle()

  return (
    <div className={'container mx-auto'}>
      <h2 className={'font-bold text-md'}>
        {title}
      </h2>
    </div>
  )
}

export default MyPage