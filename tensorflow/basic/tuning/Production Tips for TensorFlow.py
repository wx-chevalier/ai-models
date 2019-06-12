import tensorflow as tf
from tensorflow.python.framework import ops
ops.reset_default_graph()

word_list = ['to', 'be', 'or', 'not', 'to', 'be']
vocab_list = list(set(word_list))
vocab2ix_dict = dict(zip(vocab_list, range(len(vocab_list))))
ix2vocab_dict = {val:key for key,val in vocab2ix_dict.items()}

import json
with open('vocab2ix_dict.json', 'w') as file_conn:
    json.dump(vocab2ix_dict, file_conn)

with open('vocab2ix_dict.json', 'r') as file_conn:
    vocab2ix_dict = json.load(file_conn)

saver = tf.train.Saver()

for i in range(generations):
    ...
    if i%save_every == 0:
        saver.save(sess, 'my_model', global_step=step)

saver = tf.train.Saver({"my_var": my_variable})

conv_weights = tf.Variable(tf.random_normal(), name='conv_weights')
loss = tf.reduce_mean(... , name='loss')

tf.app.flags.DEFINE_string("worker_locations", "", "List of worker addresses.")
tf.app.flags.DEFINE_float('learning_rate', 0.01, 'Initial learning rate.')
tf.app.flags.DEFINE_integer('generations', 1000, 'Number of training generations.')
tf.app.flags.DEFINE_boolean('run_unit_tests', False, 'If true, run tests.')

def main(_):
    worker_ips = FLAGS.worker_locations.split(",")
    learning_rate = FLAGS.learning_rate
    generations = FLAGS.generations
    run_unit_tests = FLAGS.run_unit_tests

if __name__ == "__main__":
    tf.app.run()

tf.logging.set_verbosity(tf.logging.WARN)

tf.logging.set_verbosity(tf.logging.DEBUG)