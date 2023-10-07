import pandas as pd
import numpy as np
import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Embedding, Flatten, Dense
from tensorflow.keras.preprocessing.text import Tokenizer
from tensorflow.keras.preprocessing.sequence import pad_sequences
from tensorflow.keras.layers import Dense, Conv1D, MaxPooling1D, GlobalMaxPooling1D

#loading 
df = pd.read_csv('data.csv')
df = df.dropna()
df['Category'] =  pd.factorize(df['Category'])[0]

def preprocess_data(x):
    empty = np.zeros(20)
    empty[0:20] = x[0:20]
    return empty

# Sample data
descritions = df['Description']
labels = df['Category']
y = np.array(labels)
# Tokenize and pad the text data
max_words = 20
tokenizer = Tokenizer(num_words=max_words)
tokenizer.fit_on_texts(descritions)
sequences = tokenizer.texts_to_sequences(descritions)
x = pad_sequences(sequences)

x = np.array(list(map(preprocess_data, x)))

# Define the model
model = Sequential()
model.add(Embedding(input_dim=max_words, output_dim=32, input_length=20))
model.add(Conv1D(32, 2, activation='relu'))
model.add(MaxPooling1D(5))
model.add(Conv1D(32, 2, activation='relu'))
model.add(GlobalMaxPooling1D())
model.add(Dense(4))

# Compile the model
model.compile(optimizer=tf.keras.optimizers.Adam(learning_rate=0.001), loss=tf.keras.losses.SparseCategoricalCrossentropy(from_logits=True), metrics=['accuracy'])

# Train the model
model.fit(x, y, epochs=10, batch_size=4)

model.save('categorizer.keras')
