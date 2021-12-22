const getData = async (url) => {
  const response = await fetch(url);

  if (!response.ok) {
    console.error(`Couldn't fetch ${url}. Status: ${response.status} - ${response.statusText}`);
  }

  return await response.json();
};

const postData = async (url, body) => {
  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(body)
  });

  if (!response.ok) {
    console.error(`Couldn't post ${url}. Status: ${response.status} - ${response.statusText}`);
  }

  return await response.json();
};

const editData = async (url, body) => {
  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'PUT',
    body: JSON.stringify(body)
  });

  if (!response.ok) {
    console.error(`Couldn't edit ${url}. Status: ${response.status} - ${response.statusText}`);
  }

  return await response.json();
};

const deleteData = async (url) => {
  const response = await fetch(url, {
    method: 'DELETE'
  });

  if (!response.ok) {
    console.error(`Couldn't delete ${url}. Status: ${response.status} - ${response.statusText}`);
  }

  return await response.json();
};

export { getData, postData, editData, deleteData };
